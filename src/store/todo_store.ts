import { create } from 'zustand';
import Todo from '../Todo';

interface TodoState {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (todoId: number) => void;
    setTodos: (todos: Todo[]) => void;
}


export const useTodoStore = create<TodoState>((set)=>({
    todos:[],
    addTodo: (todo:Todo) => set((state) => ({todos: [...state.todos , todo]})),
    removeTodo: (todoId: number) => set((state) => ({todos : state.todos.filter((todo) => todo.id !== todoId)})),
    // setTodos:(todos: Todo[]) => set(() => ({todos: todos})) ,
    setTodos: (todos) => set({ todos }),
    resetTodos: () => set({todos : []})
}));