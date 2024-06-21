import { useEffect, useState } from "react";
import Todo from "./Todo";
import { useTodoStore } from "./store/todo_store";


// const getTodos = () => {
//   const savedTodos = localStorage.getItem('todos');
//   if (savedTodos) {
//     const parsedTodos: Todo[] = JSON.parse(savedTodos);
//     useTodoStore.setState({ todos: parsedTodos });
//   }
// };

export default function AddTodoForm() {

  const { todos , addTodo , setTodos} = useTodoStore((state)=> ({
    todos: state.todos,
    addTodo: state.addTodo,
    setTodos: state.setTodos,
  }))

  const [inputValue, setInputValue] = useState<string>('');

  const addTodoFun = (text: string) => {
    const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false,
    };
    addTodo(newTodo);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
};


const handelSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (inputValue.trim() !== '') {
      addTodoFun(inputValue);
      setInputValue('');
  }
}

// useEffect(() => {
//   getTodos(); 
// }, []);

useEffect(() => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    const parsedTodos: Todo[] = JSON.parse(savedTodos);
    setTodos(parsedTodos);
  }
}, [setTodos]);


  return (
    <div className="mb-4">
      <form onSubmit={handelSubmit} className='relative'>
        <input type="text" value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} id="first_name" className=" absolute bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-14" placeholder="Write your Todo" required />
        <button type="submit" className="absolute text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300  shadow-lg shadow-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center end-2.5 my-2">Add</button>
      </form>
    </div>
  );
}
