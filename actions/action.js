'use server'

import { addTodo } from "@/app/prisma-db"
import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
const prisma = new PrismaClient()
export async function addTodoForm(formData) {

    const title = formData.get('title')

    try {
        await prisma.todo.create({
            data: { title }
        })
        revalidatePath('/')
    } catch (error) {
        console.log(error);

    }
} 