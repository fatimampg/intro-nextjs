'use server';
import { revalidatePath } from 'next/cache';
import db from './db';

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id: id },
    data: {
      completed: true,
    },
  });
  revalidatePath('/todos');
};

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  });
  // until now, the content is cached. To see the update (new todo just added) I need to delete the cache of the page and force it to refresh its data (otherwise, it will only appear after refreshing the page) --> update data rendered, code running on server, no client side code added..
  revalidatePath('/todos'); // THIS DOES A FULL RE-RENDER OF THE PAGE! To avoid it.. maybe, use client side components...
};
