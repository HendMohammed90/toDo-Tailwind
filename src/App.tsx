import './App.css'
import Counter from './Counter';
import TodoList from './TodoList';

function App() {

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl font-bold mb-3">Todo List<Counter/></h1>
      <TodoList />
    </div>
  );
}

export default App
