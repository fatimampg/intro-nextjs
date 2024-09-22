import { NextResponse } from 'next/server';
import db from '@/utils/db';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany({});
  return NextResponse.json({ data: todos });
};

export const POST = async (request: Request) => {
  const data = await request.json(); //ext. JSON payload from the body
  const todo = await db.todo.create({
    data,
  });
  return NextResponse.json({ message: todo });
};

//can be done using server actions, mutations, ... it's already in the server
