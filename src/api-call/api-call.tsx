import axios from "axios";

export interface Todos {
    id: number
    text: string;
    description: string;
    status: string;
}

// POST a new todo
export const handlePostData = async (data: Todos): Promise<Todos> => {
    const res = await axios.post('/api/todos', data);
    return res.data;
}

// GET all todos
export const handleGetData = async (): Promise<Todos[]> => { 
    const res = await axios.get('/api/todos');
    return res.data;
}

// GET noe todos by id
export const handleGetById = async (id: number): Promise<Todos> => {
  const res = await axios.get(`/api/todos/${id}`);
  return res.data;
};


// UPDATE a todo by ID
export const handleUpdateTodo = async (id: number, data?: Partial<Todos>): Promise<Todos> => { 
    const res = await axios.put(`/api/todos/${id}`, data);
    return res.data;
}

// DELETE a todo by ID
export const handleDeleteTodo = async (id: number): Promise<{ success: boolean }> => {
    const res = await axios.delete(`/api/todos/${id}`);
    return res.data;
}
