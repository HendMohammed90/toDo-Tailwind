import { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';


const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);


useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
    }
  }, [todos]);
  

  
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
