import Todo from './Todo';

interface TodoItemProps {
    todo: Todo;
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

function TodoItem({ todo, completeTodo, removeTodo }: TodoItemProps) {

    const handleCompleteClick = () => {
        completeTodo(todo.id);
    };

    const handleRemoveClick = () => {
        removeTodo(todo.id);
    };

    return (
        <li className={`flex justify-between items-center`}>
            <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            <div>
                <button onClick={handleCompleteClick} className={`mx-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>Complete</button>
                <button onClick={handleRemoveClick} className="mx-1">Remove</button>
            </div>
        </li>
    );
}

export default TodoItem;
