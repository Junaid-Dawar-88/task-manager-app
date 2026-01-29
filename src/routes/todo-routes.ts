import { prisma } from "@/lib/prisma";

interface TodoInput {
  id?: number;
  text: string;
  description: string;
  status: string;
}

export const TodoRoutes = {
 '/api/todos': {
  async POST(req: Request) {
    try {
      const body = await req.json() as TodoInput
      const data = await prisma.todo.create({
        data: {
          text: body.text,
          description: body.description,
          status: body.status
        }
      })
      return Response.json(data)
    } catch (error) {
      console.log(error)
      return Response.error()
    }
  },
  async GET(req: Request) {
    try{
      const data = await prisma.todo.findMany()
      return Response.json(data)
    } catch (error) {
      console.log(error)
      return Response.error()
    }
  }
 },

 '/api/todos/:id': {

   async GET(req: Request) {
    try {
      const url = new URL(req.url);
      const id = url.pathname.split('/').pop(); 

      const todoId = Number(id);

      if (!todoId || isNaN(todoId)) {
        return new Response("Invalid ID", { status: 400 });
      }

      const data = await prisma.todo.findUnique({
        where: { id: todoId },
      });

      if (!data) {
        return new Response("Todo not found", { status: 404 });
      }

      return Response.json(data);
    } catch (error) {
      console.error(error);
      return new Response("Server Error", { status: 500 });
    }
  },

  async PUT(req: Request) {
    try{
      const body = await req.json() as TodoInput
      const id = req.url.split('/').pop()
      const data = await prisma.todo.update({
        where: {id: Number(id)},
        data: {
          text: body.text,
          description: body.description,
          status: body.status
        }
      })
      return Response.json(data)
    } catch(error){
      console.log(error)
      return Response.error()
    }
  },
  async DELETE(req: Request) {
    try{

      const id = req.url.split('/').pop()
      if(!id){
        console.log('id is undefined!')
      }
      const data = await prisma.todo.delete({
        where: {id: Number(id)}
      })
    return Response.json(data)
  } catch (error) {
    console.log(error)
    return Response.error()
  }
 }
 }
};

export default TodoRoutes;
