import { useEffect } from 'react';
import Todo from './Todo';
import TodoItem from './TodoItem';
import { todoAtom } from './atom/todo.atom';
import { inputValueAtom } from './atom/input-value.atom';
import Add_todo_form from './Add_todo_form';


const TodoList = () => {

    const [todos, setTodos] = todoAtom.useState();
    const [inputValue, setInputValue] = inputValueAtom.useState();


    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    };

    const completeTodo = (id: number) => {
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const removeTodo = (id: number) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handelSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            addTodo(inputValue);
            setInputValue('');
        }
    }

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    return (
        <>
        <Add_todo_form  handelSubmit={handelSubmit}/>
            <ul className='my-24'>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;
