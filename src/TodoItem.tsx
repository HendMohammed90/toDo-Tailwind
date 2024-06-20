import Todo from './Todo';
import { useState } from 'react';
import { todoAtom } from './atom/todo.atom';


interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {


    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [todos, setTodos] = todoAtom.useState();



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



    const saveEdit = () => {
        const updatedTodos = todos.map(t => (t.id === todo.id ? { ...t, text: editText } : t));
        setIsEditing(false);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    return (
        <li className={`flex justify-between items-center`}>
            {isEditing ? (
                <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className='bg-gray-200'
                />
            ) : (
                <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            )}

            <div>
                {isEditing ? (
                    <button onClick={saveEdit} className='text-red-600'>Save</button>
                ) : (
                    <button className={`mx-1 text-blue-500 ${todo.completed ? 'line-through text-gray-500' : ''}`} onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button onClick={() => handleCompleteClick(todo.id)} className={`mx-1 text-green-500 ${todo.completed ? 'line-through text-gray-500' : ''}`}>Complete</button>
                <button onClick={() => handleRemoveClick(todo.id)} className="mx-1 text-red-800">Remove</button>
            </div>
        </li>
    );
}

export default TodoItem;
