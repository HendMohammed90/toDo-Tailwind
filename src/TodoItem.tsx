import { useEffect, useState } from 'react';
import Todo from './Todo';

interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {

    const [todos, setTodos] = useState<Todo[]>([]);



    const handleCompleteClick = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleRemoveClick = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };



useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
    }
  }, [todos]);
  

  

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
