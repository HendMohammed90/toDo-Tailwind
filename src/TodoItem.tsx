import Todo from './Todo';
import { useState } from 'react';
import { todoAtom } from './atom/todo.atom';


interface TodoItemProps {
    todo: Todo;
    completeTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

function TodoItem({ todo, completeTodo, removeTodo }: TodoItemProps) {


    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const [todos, setTodos] = todoAtom.useState();
    


    const handleCompleteClick = () => {
        completeTodo(todo.id);
    };

    const handleRemoveClick = () => {
        removeTodo(todo.id);
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
                    <button onClick={saveEdit}>Save</button>
                ) : (
                    <button className={`mx-1 ${todo.completed ? 'line-through text-gray-500' : ''}`} onClick={() => setIsEditing(true)}>Edit</button>
                )}
                <button onClick={handleCompleteClick} className={`mx-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>Complete</button>
                <button onClick={handleRemoveClick} className="mx-1">Remove</button>
            </div>
        </li>
    );
}

export default TodoItem;
