import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export function getTodos() {
    return prisma.todo.findMany()
}

export function addTodo(title) {
    console.log(title);

    return prisma.product.create({
        data: { title }
    })
} 