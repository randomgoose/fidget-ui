import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
  Tag,
  Heading,
} from 'fidget-ui';
import { IconCheck, IconEllipsisHorizontal, IconExclamationTriangle } from 'fidget-ui/icons';

const data = [
  {
    id: '#Task1',
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task2',
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task3',
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task4',
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task5',
    status: 'Done',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task6',
    status: 'Delayed',
    expire_in: '1d',
    assignee: 'John Doe',
  },
  {
    id: '#Task7',
    status: 'Delayed',
    expire_in: '1d',
    assignee: 'John Doe',
  },
];

const renderStatus = (status: string) => {
  switch (status) {
    case 'WIP':
      return (
        <Tag variant="subtle" colorScheme="neutral" leftIcon={<IconEllipsisHorizontal />}>
          {status}
        </Tag>
      );
    case 'Done':
      return (
        <Tag variant="subtle" colorScheme="emerald" leftIcon={<IconCheck />}>
          {status}
        </Tag>
      );
    case 'Delayed':
      return (
        <Tag variant="subtle" colorScheme="red" leftIcon={<IconExclamationTriangle />}>
          {status}
        </Tag>
      );
    default:
      return <Tag>{status}</Tag>;
  }
};

export function TableUsage() {
  return (
    <>
      <Heading as="h5">Usage</Heading>
      <Table width={'fill-parent'}>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((datum) => (
            <TableRow key={datum.id}>
              <TableCell>{datum.id}</TableCell>
              <TableCell>{renderStatus(datum.status)}</TableCell>
              <TableCell>{datum.expire_in}</TableCell>
              <TableCell>{datum.assignee}</TableCell>
              <TableCell padding={0}>
                <Button variant="ghost" colorScheme="red">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
