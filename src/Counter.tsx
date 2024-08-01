// src/components/Counter.tsx
import { todoAtom } from './atom/todo.atom';

export default function Counter() {

  const todos = todoAtom.useValue();

  return (
    <span>
      ({todos.length})
    </span>
  );
}
