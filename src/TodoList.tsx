import TodoItem from './TodoItem';
import { todoAtom } from './atom/todo.atom';
import Add_todo_form from './Add_todo_form';
import { useEffect } from 'react';


const TodoList = () => {

    const [todos, setTodos] = todoAtom.useState();

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    return (
        <>
        <Add_todo_form />
            <ul className='my-24'>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
