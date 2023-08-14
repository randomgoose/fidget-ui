import { TableProps } from './interface';
import { TableCell } from './table-cell';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { TableBody } from './table-body';
import { TableHead } from './table-head';
import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';
import { useFetchGlobalConfig } from '../config-provider';
import { mergeUserDefinedStyles } from '../utils/mergeUserDefinedStyle';
import { flattenDeep, merge } from 'lodash-es';

const { AutoLayout } = figma.widget;

function Table({ children, style, ...rest }: TableProps) {
  const globalConfig = useFetchGlobalConfig();
  const styles = mergeUserDefinedStyles({
    globalStyle: globalConfig.Table?.style,
    defaultStyle: getTableStyles(),
    propStyle: style,
  });

  const { header, body, row, head, cell } = NODE_NAME_MAP;

  const componentNodeNameMap = {
    [body]: {
      component: TableBody,
      style: styles.body,
    },
    [header]: {
      component: TableHeader,
      style: styles.header,
    },
    [head]: {
      component: TableHead,
      style: styles.head,
    },
    [row]: {
      component: TableRow,
      style: styles.row,
    },
    [cell]: {
      component: TableCell,
      style: styles.cell,
    },
  };

  const recursivelyRenderChildren = (children: FigmaDeclarativeNode): any => {
    if (Array.isArray(children)) {
      return flattenDeep(children).map((child: any, index: number) => {
        const target = componentNodeNameMap[child?.props?.name];
        if (target) {
          const Component = target.component;
          return (
            // h(Component, {
            //   key: index,
            //   ...merge({}, target?.style, child.props),
            //   children: recursivelyRenderChildren(flatten(child.children)),
            //   name: child.props.name
            // })
            <Component
              {...merge({}, target?.style, child.props)}
              key={index}
              name={child.props.name}
            >
              {recursivelyRenderChildren(child.children as FigmaDeclarativeNode)}
            </Component>
          );
        } else {
          return child;
        }
      });
    }

    return null;
  };

  return (
    <AutoLayout {...styles.container} {...rest} name={NODE_NAME_MAP.container}>
      {recursivelyRenderChildren(children)}
    </AutoLayout>
  );
}

export { Table, TableCell, TableHeader, TableRow, TableBody, TableHead };
