import { MenuProps } from './interface';
import { getMenuStyles } from './styles';
import { MenuTrigger } from './trigger';
import { MenuList } from './list';
import { getSyncedKeys } from '../utils';
import { NODE_NAME_MAP, isMenuDivider, isMenuItem } from './utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { merge } from 'lodash-es';
import { MenuItem } from './item';
import { MenuDivider } from './divider';

const { widget } = figma;
const { AutoLayout, useSyncedState, Line, Fragment } = widget;

export function Menu(props: MenuProps) {
  const [syncedKeyOpen] = getSyncedKeys('Menu', props.id, ['open']);
  const [isOpen, setIsOpen] = useSyncedState(syncedKeyOpen, false);

  const { placement = 'bottom-start', children } = props;

  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getMenuStyles({ placement: placement }),
    globalStyle: globalConfig.Menu?.style,
    propStyle: props.style,
  });

  const renderMenuChildren = () => {
    if (Array.isArray(children)) {
      const order = placement.startsWith('top')
        ? [NODE_NAME_MAP.list, NODE_NAME_MAP.trigger]
        : [NODE_NAME_MAP.trigger, NODE_NAME_MAP.list];

      return children
        .sort((a: any, b: any) => order.indexOf(a?.props?.name) - order.indexOf(b?.props?.name))
        .map((child: any, index: number) => {
          // TODO 如果使用 name 判断节点，需要为 fidget 组件节点提供不易冲突的名称，如 __FidgetUI_Menu_Item
          switch (child?.props?.name) {
            case NODE_NAME_MAP.trigger:
              return (
                <MenuTrigger
                  key={index}
                  {...child.props}
                  children={child.children}
                  onClick={(e: WidgetClickEvent) => {
                    child.props?.onClick?.(e);
                    setIsOpen((prev) => !prev);
                  }}
                />
              );

            case NODE_NAME_MAP.list:
              return (
                <AutoLayout
                  key={index}
                  width={1}
                  name={NODE_NAME_MAP.listLocator}
                  overflow="scroll"
                >
                  <Line opacity={0} />
                  {isOpen ? (
                    <MenuList
                      {...styles.list}
                      // {...child.props}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      children={child.children.map((liteItem: any, itemIndex: number) => {
                        return isMenuItem(liteItem) ? (
                          <MenuItem
                            key={itemIndex}
                            children={liteItem.children}
                            {...merge({}, styles.item, liteItem.props)}
                          />
                        ) : isMenuDivider(liteItem) ? (
                          <MenuDivider
                            key={itemIndex}
                            children={liteItem.children}
                            {...merge({}, styles.divider, liteItem.props)}
                          />
                        ) : null;
                      })}
                    />
                  ) : null}
                </AutoLayout>
              );

            default:
              return <Fragment key={index} children={child} />;
          }
        });
    } else {
      return children;
    }
  };

  return (
    <AutoLayout
      {...styles.container}
      name={NODE_NAME_MAP.container}
      overflow="visible"
      direction="vertical"
    >
      {renderMenuChildren()}
    </AutoLayout>
  );
}
