import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
  Tag,
  colors,
  Menu,
  MenuList,
  MenuTrigger,
  MenuItem,
} from 'fidget-ui';
import {
  IconCheck,
  IconChevronDown,
  IconEllipsisHorizontal,
  IconExclamationTriangle,
  IconPlus,
} from 'fidget-ui/icons';
import { maxBy } from 'lodash-es';

const { useSyncedState } = figma.widget;

const INITIAL_DATA = [
  {
    id: 1,
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 2,
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 3,
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 4,
    status: 'WIP',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 5,
    status: 'Done',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 6,
    status: 'Delayed',
    expire_in: '1d',
    assignee: 'John',
  },
  {
    id: 7,
    status: 'Delayed',
    expire_in: '1d',
    assignee: 'John',
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
  const [data, setData] = useSyncedState('data/table-usage', INITIAL_DATA);

  const deleteEntry = (id: number) => setData((prev) => prev.filter((datum) => datum.id !== id));
  const assign = (id: number, name: string) => {
    const index = data.findIndex((datum) => datum.id === id);

    if (index >= 0) {
      const newData = [...data];
      newData.splice(index, 1, { ...data[index], assignee: name });
      setData(newData);
    }
  };
  const addEntry = () => {
    const newEntry = {
      id: (maxBy(data, 'id')?.id || 0) + 1,
      status: 'WIP',
      expire_in: '1d',
      assignee: 'John',
    };

    setData((prev) => [...prev, newEntry]);
  };

  return (
    <Table width="fill-parent" overflow="visible">
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Expires in</TableHead>
          <TableHead>Assignee</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((datum) => (
          <TableRow key={datum.id} overflow="visible">
            <TableCell>{'Task ' + datum.id}</TableCell>
            <TableCell>{renderStatus(datum.status)}</TableCell>
            <TableCell>{datum.expire_in}</TableCell>
            <TableCell overflow="visible">
              <Menu id={'assignee/' + datum.id} placement="top-start">
                <MenuTrigger fontSize={14} verticalAlignItems="center" spacing={4} padding={4}>
                  {datum.assignee}
                  <IconChevronDown width={12} height={12} />
                </MenuTrigger>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      assign(datum.id, 'John');
                    }}
                  >
                    John
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      assign(datum.id, 'Zed');
                    }}
                  >
                    Zed
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      assign(datum.id, 'Rick');
                    }}
                  >
                    Rick
                  </MenuItem>
                </MenuList>
              </Menu>
            </TableCell>
            <TableCell padding={0}>
              <Button onClick={() => deleteEntry(datum.id)} variant="ghost" colorScheme="red">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
        <TableRow fill={colors.neutral[50]}>
          <TableCell>
            <Button variant="ghost" leftIcon={<IconPlus />} onClick={addEntry}>
              Add entry
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
