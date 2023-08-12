import { merge } from 'lodash-es';
import { CardHeader } from './card-header';
import { CardBody } from './card-body';
import { CardFooter } from './card-footer';
import { CardProps } from './interface';
import { getCardStyles } from './styles';
import { NODE_NAME_MAP } from './utils';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { useFetchGlobalConfig } from '../config-provider';

const { AutoLayout, h } = figma.widget;

function Card({ children, style, ...rest }: CardProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    defaultStyle: getCardStyles(),
    globalStyle: globalConfig.Card?.style,
    propStyle: style,
  });

  const renderChildren = () => {
    if (Array.isArray(children)) {
      return children.map((child: any, index: number) => {
        const componentNodeNameMaps: { name: string; style: any; component: any }[] = [
          {
            name: NODE_NAME_MAP.header,
            component: CardHeader,
            style: styles.header,
          },
          {
            name: NODE_NAME_MAP.body,
            component: CardBody,
            style: styles.body,
          },
          {
            name: NODE_NAME_MAP.footer,
            component: CardFooter,
            style: styles.footer,
          },
        ];
        const target = componentNodeNameMaps.find((info) => info.name === child?.props?.name);

        return target
          ? h(target.component, {
              key: index,
              ...merge({}, target.style, child.props),
              children: child.children,
            })
          : child;
      });
    }

    return null;
  };

  return (
    <AutoLayout {...styles.container} {...rest} name={NODE_NAME_MAP.container}>
      {renderChildren()}
    </AutoLayout>
  );
}

export { Card, CardHeader, CardBody, CardFooter };
