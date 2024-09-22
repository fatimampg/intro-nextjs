'use client';
import { useTransition } from 'react';
import { completeTodo } from '@/utils/actions';

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition(); // react hook to run task after the other processes are finished (low-priority)

  return (
    <div
      className={`border border-black/20 cursor-pointer ' ${
        todo.completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  );
};

export default Todo;
