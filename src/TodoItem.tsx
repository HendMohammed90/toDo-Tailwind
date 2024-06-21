import Todo from './Todo';
import { useTodoStore } from './store/todo_store';

interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {

    const { todos, setTodos, removeTodo } = useTodoStore((state) => ({
        todos: state.todos,
        setTodos: state.setTodos,
        removeTodo: state.removeTodo,
      }));


    const handleCompleteClick = (id: number) => {
        const updatedTodos = todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          );
          setTodos(updatedTodos);
          localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleRemoveClick = (id: number) => {
      removeTodo(id);
      const updatedTodos = todos.filter((t) => t.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };


  
    return (
        <li className={`flex justify-between items-center`}>
            <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            <div>
                <button onClick={() => handleCompleteClick(todo.id)} className={`mx-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>Complete</button>
                <button onClick={() => handleRemoveClick(todo.id)} className="mx-1">Remove</button>
            </div>
        </li>
    );
}

export default TodoItem;
