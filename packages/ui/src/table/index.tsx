import { TableProps } from './interface';
import { TableCell } from './table-cell';
import { TableHeader } from './table-header';
import { TableRow } from './table-row';
import { TableBody } from './table-body';
import { TableHead } from './table-head';
import { getTableStyles } from './styles';
import { NODE_NAME_MAP } from './utils';

const { AutoLayout } = figma.widget;

function Table(props: TableProps) {
  const { container } = getTableStyles();

  return (
    <AutoLayout {...container} {...props} name={NODE_NAME_MAP.container}>
      {props.children}
    </AutoLayout>
  );
}

export { Table, TableCell, TableHeader, TableRow, TableBody, TableHead };
