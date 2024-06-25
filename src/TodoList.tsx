import TodoItem from './TodoItem';
import { todoAtom } from './atom/todo.atom';
import Add_todo_form from './Add_todo_form';
import { useEffect } from 'react';
import cache from '@mongez/cache';
import Todo from './Todo';


const TodoList = () => {

    const [todos, setTodos] = todoAtom.useState();

    useEffect(() => {
        const savedTodos = cache.get('todos');
        if (savedTodos && todos.length === 0) {
            setTodos(savedTodos);
        }
    }, []);

    return (
        <>
            <Add_todo_form />
            <ul className='my-24'>
                {todos.map((todo: Todo) => (
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
