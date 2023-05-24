import { Heading, IconButton, TextField, Checkbox, colors } from '../src/components';
import { IconMagnifyingGlass, IconMinus, IconPlus } from '../src/icons';

const { AutoLayout, useSyncedState, Text } = figma.widget;

export interface TodoProps {
  id: string;
  content: string;
  done: boolean;
}

export function Todo() {
  const [todos, setTodos] = useSyncedState<TodoProps[]>('todo-app/todos', []);
  const [keyword, setKeyword] = useSyncedState('todo-app/keyword', '');

  const addTodo = () => {
    const id = Math.random() * 10000000000 + '';
    setTodos((prev) => [{ id, content: '', done: false }, ...prev]);
  };

  const updateTodo = (id: string, newTodo: Omit<TodoProps, 'id'>) => {
    const index = todos.findIndex((item) => item.id === id);

    if (index >= 0) {
      const newTodos = [...todos];
      newTodos[index] = { ...newTodo, id };
      setTodos(newTodos);
    }
  };

  const deleteTodo = (id: string) => {
    return setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AutoLayout
      name="Todo"
      width={320}
      height={'hug-contents'}
      fill={colors.white}
      cornerRadius={16}
      padding={24}
      direction={'vertical'}
      spacing={8}
    >
      <AutoLayout width={'fill-parent'} verticalAlignItems={'center'}>
        <Heading as="h5" width={'fill-parent'}>
          Todo
        </Heading>
        <IconButton
          icon={<IconPlus />}
          size={'sm'}
          variant={'ghost'}
          onClick={() => {
            addTodo();
          }}
        />
      </AutoLayout>

      <TextField
        width={'fill-parent'}
        value={keyword}
        onTextEditEnd={(e) => setKeyword(e.characters)}
        leftElement={
          <IconMagnifyingGlass
            width={'fill-parent'}
            height={'fill-parent'}
            color={colors.neutral[400]}
          />
        }
        placeholder={'Search todos...'}
      />

      <AutoLayout name="Todo List" width={'fill-parent'} direction={'vertical'}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TodoItem
              {...todo}
              onChange={(newTodo) => updateTodo(todo.id, { ...newTodo })}
              onDelete={(id) => deleteTodo(id)}
              key={todo.id}
            />
          ))
        ) : (
          <AutoLayout
            width={'fill-parent'}
            height={72}
            verticalAlignItems={'center'}
            horizontalAlignItems={'center'}
          >
            <Text fill={colors.neutral[400]}>Click + to add a todo.</Text>
          </AutoLayout>
        )}
      </AutoLayout>
    </AutoLayout>
  );
}

function TodoItem(
  props: TodoProps & { onChange?: (todo: TodoProps) => void; onDelete?: (id: string) => void }
) {
  const { onChange, onDelete, ...todo } = props;

  return (
    <AutoLayout name="Todo Item" verticalAlignItems={'center'} width={'fill-parent'}>
      <Checkbox
        colorScheme={'emerald'}
        checked={props.done}
        onChange={(checked) => onChange && onChange({ ...todo, done: checked })}
      />
      <TextField
        width={'fill-parent'}
        value={props.content}
        onTextEditEnd={(e) => onChange && onChange({ ...todo, content: e.characters })}
        variant={'flush'}
        placeholder={'What to do next?'}
        textDecoration={props.done ? 'strikethrough' : 'none'}
        showClearIcon={false}
      />
      <IconButton
        variant="ghost"
        icon={<IconMinus color={colors.neutral[300]} />}
        size={'sm'}
        onClick={() => onDelete && onDelete(props.id)}
      />
    </AutoLayout>
  );
}
