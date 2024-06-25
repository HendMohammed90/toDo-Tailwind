import Todo from './Todo';
import { useRef, useState } from 'react';
import { todoAtom } from './atom/todo.atom';


interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {


    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef<HTMLInputElement | null>(null) 



    const handleCompleteClick = (id: number) => {
        todoAtom.complete(id);
    };

    const handleRemoveClick = (id: number) => {
        todoAtom.remove(id);
    };

    const handleSaveClick = () => {
        const newText = editInputRef.current?.value.trim();
        if (!newText) return;
        todoAtom.updateText(todo.id, newText);
        setIsEditing(false);
      };



    return (
        <li className={`flex justify-between items-center`}>
            {isEditing ? (
                <input
                    type="text"
                    defaultValue={todo.text}
                    ref={editInputRef}
                    className='bg-gray-200'
                />
            ) : (
                <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>{todo.text}</span>
            )}

            <div>
                {isEditing ? (
                    <button onClick={handleSaveClick} className='text-red-600'>Save</button>
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
