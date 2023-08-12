import {
  Avatar,
  useGlobalConfig,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  MenuTrigger,
  SimpleGrid,
  colors,
  TextField,
  Button,
  Select,
} from 'fidget-ui';
import { Status, Task, TaskCardProps } from './types';
import {
  IconEllipsisHorizontalSolid,
  IconInboxSolid,
  IconMagnifyingGlassSolid,
  IconPencilSquare,
  IconPlus,
  IconTrash,
  IconXMark,
} from 'fidget-ui/icons';
import * as _ from 'lodash-es';

const { widget } = figma;
const { useSyncedState, AutoLayout, Text } = widget;

const STATUS_ORDER = [Status.PENDING, Status.IN_PROGRESS, Status.DONE];

const assignees = [
  {
    name: 'Puff',
    src: 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: 'Woo',
    src: 'https://images.pexels.com/photos/4056462/pexels-photo-4056462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const initialTasks: Task[] = [
  {
    id: 0,
    name: 'Build new comopnents',
    assignee: assignees[0],
    description: 'Build Table, Menu, Stepper, DatePicker and Card',
    status: Status.PENDING,
  },
  {
    id: 1,
    name: 'Implement useGlobalConfig hook',
    assignee: assignees[0],
    description: 'Build some components',
    status: Status.PENDING,
  },
  {
    id: 2,
    name: 'Build components',
    assignee: assignees[0],
    description: 'Build some components',
    status: Status.PENDING,
  },
  {
    id: 3,
    name: 'Build components',
    assignee: assignees[0],
    description: 'Build some components',
    status: Status.DONE,
  },
  {
    id: 4,
    name: 'Build components',
    assignee: assignees[0],
    description: 'Build some components',
    status: Status.IN_PROGRESS,
  },
];

function TaskCard({ task, onAssign, onToggleStatus, onEdit }: TaskCardProps) {
  return (
    <Card overflow="visible" width={240}>
      <CardHeader
        fontSize={14}
        width={'fill-parent'}
        color={colors.neutral[700]}
        fontWeight={'semi-bold'}
        overflow="visible"
        verticalAlignItems="center"
      >
        {task.name}
        <Menu id={`${task.id}/settings`} placement="top-end">
          <MenuTrigger>
            <IconButton icon={<IconEllipsisHorizontalSolid />} size="sm" variant="ghost" />
          </MenuTrigger>
          <MenuList>
            <MenuItem onClick={() => onEdit?.(task)} icon={<IconPencilSquare />}>
              Edit task
            </MenuItem>
            <MenuItem icon={<IconTrash />} color={colors.red[500]}>
              Remove task
            </MenuItem>
          </MenuList>
        </Menu>
      </CardHeader>
      <CardBody width={'fill-parent'}>
        <Text fill={colors.neutral[500]} fontSize={14} width={'fill-parent'}>
          {task.description || ''}
        </Text>
      </CardBody>
      <CardFooter overflow="visible" verticalAlignItems={'center'} width={'fill-parent'}>
        <AutoLayout width={'fill-parent'} overflow="visible">
          <Menu id={`${task.id}/status`} placement="top-end">
            <MenuTrigger fontSize={12} lineHeight={24}>
              {task.status}
            </MenuTrigger>
            <MenuList>
              {...STATUS_ORDER.map((status) => (
                <MenuItem key={status} onClick={() => onToggleStatus?.(status)}>
                  {status}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </AutoLayout>

        <Menu id={`${task.id}/assignee`} placement="top-end">
          <MenuTrigger
            padding={{ vertical: 4, horizontal: 6 }}
            cornerRadius={6}
            hoverStyle={{ fill: colors.neutral[100] }}
            fontSize={12}
            verticalAlignItems="center"
            spacing={4}
            color={colors.neutral[500]}
          >
            <Avatar src={task.assignee.src} size={16} />
            {task.assignee.name}
          </MenuTrigger>
          <MenuList>
            {...assignees.map((user) => (
              <MenuItem key={user.name} onClick={() => onAssign?.(user)}>
                <Avatar size={'xs'} displayName={user.name} src={user.src} />
                {user.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
  );
}

function Widget() {
  const [tasks, setTasks] = useSyncedState<Task[]>('count', initialTasks);
  const [keywords, setKeywords] = useSyncedState<string>('keywords', '');
  const [edit, setEdit] = useSyncedState<Task | null>('edit', null);

  const res = tasks.filter(
    (task) => task.name.includes(keywords) || task.description?.includes(keywords)
  );

  function updateTaskById(taskId: number, props: Partial<Task>) {
    const index = tasks.findIndex(({ id }) => id === taskId);
    if (index >= 0) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1, { ...tasks[index], ...props });
      setTasks(newTasks);
    }
  }

  function createNewTask(status: Status) {
    const currentMaxId = _.maxBy(tasks, 'id')?.id;
    const id = currentMaxId ? currentMaxId + 1 : 0;
    const newTask: Task = {
      id,
      name: 'New Task',
      description: 'Do something...',
      assignee: assignees[0],
      status,
    };
    setTasks([newTask, ...tasks]);
  }

  useGlobalConfig({
    Checkbox: {
      style: {
        baseStyle: {
          control: {
            width: 24,
            height: 24,
            cornerRadius: 1000,
            hoverStyle: {
              fill: colors.neutral[50],
            },
          },
        },
      },
    },
  });

  return (
    <AutoLayout
      overflow="visible"
      width={1080}
      direction="vertical"
      spacing={32}
      padding={48}
      fill={colors.white}
      cornerRadius={16}
      stroke={colors.neutral[200]}
    >
      <AutoLayout width={'fill-parent'}>
        <TextField
          showClearIcon
          elementLeft={
            <IconMagnifyingGlassSolid width={16} height={16} color={colors.neutral[500]} />
          }
          id="searchbox"
          value={keywords}
          onTextEditEnd={(e) => setKeywords(e.characters)}
          size="lg"
          width={'fill-parent'}
          onClear={() => setKeywords('')}
          fontSize={14}
        />
      </AutoLayout>

      <AutoLayout spacing={32} width={'fill-parent'} direction="vertical" overflow="visible">
        {res.length > 0 ? (
          Object.entries(_.groupBy(res, 'status'))
            .sort(
              (a, b) => STATUS_ORDER.indexOf(a[0] as Status) - STATUS_ORDER.indexOf(b[0] as Status)
            )
            .map(([status, groupedTasks]) => (
              <AutoLayout
                key={status}
                direction="vertical"
                width={'fill-parent'}
                overflow="visible"
              >
                <AutoLayout verticalAlignItems="center" width={'fill-parent'} spacing={8}>
                  <Heading as="h6" fill={colors.neutral[500]}>
                    {status}
                  </Heading>
                  <Text width={'fill-parent'} fill={colors.neutral[500]} fontSize={12}>
                    {groupedTasks.length}
                  </Text>
                  <IconButton
                    size="sm"
                    icon={<IconPlus />}
                    variant="ghost"
                    onClick={() => createNewTask(status as Status)}
                  />
                </AutoLayout>
                <Divider margin={{ vertical: 8 }} />
                <SimpleGrid
                  columns={4}
                  width={'hug-contents'}
                  height={'hug-contents'}
                  spacingX={8}
                  spacingY={8}
                >
                  {...groupedTasks.map((task, index) => (
                    <TaskCard
                      onEdit={(task) => setEdit(task)}
                      onAssign={(user) => {
                        const index = tasks.findIndex(({ id }) => id === task.id);
                        if (index >= 0) {
                          const newTasks = [...tasks];
                          newTasks.splice(index, 1, { ...tasks[index], assignee: user });
                          setTasks(newTasks);
                        }
                      }}
                      onToggleStatus={(status) => {
                        updateTaskById(task.id, { status });
                      }}
                      task={task}
                      key={index}
                    />
                  ))}
                </SimpleGrid>
              </AutoLayout>
            ))
        ) : (
          <AutoLayout
            direction="vertical"
            width={'fill-parent'}
            height={320}
            horizontalAlignItems={'center'}
            verticalAlignItems="center"
            spacing={4}
          >
            <IconInboxSolid color={colors.neutral[500]} />
            <Text fill={colors.neutral[500]}>No results</Text>
          </AutoLayout>
        )}
      </AutoLayout>

      {edit ? (
        <AutoLayout
          cornerRadius={16}
          fill={{ color: { r: 0, g: 0, b: 0, a: 0.3 }, type: 'solid' }}
          positioning="absolute"
          width={'fill-parent'}
          height={'fill-parent'}
          x={{ type: 'left-right', leftOffset: 0, rightOffset: 0 }}
          y={{ type: 'top-bottom', topOffset: 0, bottomOffset: 0 }}
          verticalAlignItems="center"
          horizontalAlignItems="center"
          padding={{ horizontal: 128 }}
        >
          <AutoLayout
            fill={colors.white}
            width={'fill-parent'}
            height={'hug-contents'}
            cornerRadius={12}
            padding={48}
            direction="vertical"
            spacing={28}
            verticalAlignItems="center"
          >
            <IconButton
              onClick={() => setEdit(null)}
              icon={<IconXMark />}
              variant="ghost"
              positioning="absolute"
              y={{ type: 'top', offset: 16 }}
              x={{ type: 'right', offset: 16 }}
            />
            <AutoLayout direction="vertical" width={'fill-parent'} spacing={8}>
              <Text>Title</Text>
              <TextField
                id="edit/name"
                value={edit.name}
                onTextEditEnd={(e) => {
                  updateTaskById(edit.id, { name: e.characters });
                }}
              />
            </AutoLayout>

            <AutoLayout direction="vertical" width={'fill-parent'} spacing={8}>
              <Text>Description</Text>
              <TextField
                id="edit/description"
                height={180}
                value={edit.name}
                onTextEditEnd={(e) => {
                  updateTaskById(edit.id, { description: e.characters });
                }}
              />
            </AutoLayout>

            <AutoLayout direction="vertical" width={'fill-parent'} spacing={8} overflow="visible">
              <Text>Assignee</Text>
              <Select
                id="edit/assignee"
                options={assignees.map((user) => ({ label: user.name, value: user.name }))}
                onChange={() => {}}
                placement="top"
              />
            </AutoLayout>
            <Button block size="lg">
              Done
            </Button>
          </AutoLayout>
        </AutoLayout>
      ) : null}
    </AutoLayout>
  );
}

widget.register(Widget);
