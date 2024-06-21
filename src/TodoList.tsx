// import { useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import { useTodoStore } from './store/todo_store';

const TodoList = () => {

    const todos = useTodoStore((state) => state.todos);

    return (
        <>
            <AddTodoForm />
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
