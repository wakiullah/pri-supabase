import { addTodoForm } from "@/actions/action";
import Image from "next/image";
import { getTodos } from "./prisma-db";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export default async function Home() {

  const todos = await prisma.todo.findMany()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div>
        <h1>Add Todo</h1>
        <form action={addTodoForm}>
          <input type="text" className="bg-white text-black" name="title" />
          <button className="cursor-pointer" type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        {todos && todos.map(todo => {
          return <div key={todo.id}>
            <p>{todo.title}</p> </div>
        })}
      </div>
    </div>
  );
}
