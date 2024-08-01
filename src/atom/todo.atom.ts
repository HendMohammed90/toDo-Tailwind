import { atom } from "@mongez/react-atom";
import cache from "@mongez/cache";
import Todo from "../Todo";

import { PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";

setCacheConfigurations({
    driver: new PlainLocalStorageDriver(),
});

export const todoAtom = atom<Todo[]>({
    key: "todos",
    default: cache.get('todos'),
    beforeUpdate(todos) {
        cache.set('todos', todos);
        return todos;
    },
    actions: {
        add: (text: string) => {
            const newTodo: Todo = {
                id: Date.now(),
                text,
                completed: false,
            };
            const list = todoAtom.value;
            list.push(newTodo);
            todoAtom.update([...list])

        },
        remove: (id: number) => {
            const list = todoAtom.value.filter((todo: { id: number; }) => todo.id !== id);
            todoAtom.update([...list]);
        },
        complete: (id: number) => {
            const list = todoAtom.value.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            todoAtom.update([...list]);
        },
        updateText: (id: number, newText: string) => {
            const updatedTodos = todoAtom.value.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            );
            todoAtom.update(updatedTodos);
        }

    }

});


