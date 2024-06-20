import { atom } from "@mongez/react-atom";
import Todo from "../Todo";

export const todoAtom = atom<Todo[]>({
    key: "todos",
    default: [{
        id: 1,
        text: "Learn React",
        completed: false,
    }],
});


