import React, { useEffect, useState } from 'react';
import { Trash2, Edit2 } from 'lucide-react';
import TodoModal from '../todo-model/todo-model';
import { handleGetData, type Todos } from '@/api-call/api-call';
import { useDeleteTodo } from '../query/delete-query';
import SearchTodo from '@/search-todo/search-todo';
import { useNavigate } from "react-router-dom";

const TodoTable = () => {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [editing , setEditing] = useState<Todos | null>(null)
  const [searchItem , setSearchItem] = useState('')
  const [searchPriority , setSearchPriority] = useState('all')
 const deleteMutation = useDeleteTodo()
const navigate = useNavigate();

  // ================= FETCH TODOS =================
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await handleGetData();
        setTodos(data);
      } catch (err) {
        console.error('Failed to fetch todos:', err);
        setTodos([]);
      }
    };
    fetchTodos();
  }, []);


  // ================= DELETE =================  
  const handleConfirmDelete = (id: number) => {
    if (!confirm('Are you sure you want to delete?')) return;
    deleteMutation.mutate(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSearch = todos.filter((I) => {
     const inputSearch = 
     I.text.toLowerCase().includes(searchItem.toLowerCase())

     const selectSearch = searchPriority === 'all' || I.status === searchPriority
     
     return inputSearch && selectSearch
  })

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold text-slate-500">
              Add Your Task
            </h1>
            <TodoModal todos={todos} setTodos={setTodos} editing={editing} setEditing={setEditing} />
          </div>
          <p className="text-slate-400 text-lg">
            Manage your daily tasks efficiently
          </p>
        </div>

        {/* ================= STATUS CARDS (ADDED) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: 'Total Tasks',
              value: todos.length,
              color: 'from-blue-500 to-blue-600',
            },
            {
              label: 'Completed',
              value: todos.filter((t) => t.status === 'completed').length,
              color: 'from-green-500 to-green-600',
            },
            {
              label: 'Urgent',
              value: todos.filter((t) => t.status === 'urgent').length,
              color: 'from-yellow-500 to-yellow-600',
            },
            {
              label: 'Pending',
              value: todos.filter((t) => t.status === 'pending').length,
              color: 'from-red-500 to-red-600',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-br ${stat.color} rounded-lg p-6 text-white shadow-lg`}
            >
              <p className="text-sm font-medium opacity-90">
                {stat.label}
              </p>
              <p className="text-3xl font-bold mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
               <div className='py-3'>
                <SearchTodo searchItem={searchItem} 
                            setSearchItem ={setSearchItem }
                            searchPreiority ={searchPriority }
                            setSearchPriority={setSearchPriority}
                />
               </div>
        {/* ================= TABLE ================= */}
        <div className="bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-700 to-slate-600 border-b border-slate-600">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-100">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-100">
                    Description
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-100">
                    Status
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-100">
                    Actions
                  </th>
                </tr>
              </thead>

             <tbody>
  {handleSearch.length === 0 ? (
     <tr>
        <td colSpan={5} className="text-center py-12 text-gray-500">
          No data found
        </td>
      </tr>
  ) : (
    handleSearch.map((todo, idx) => (
      <tr
        key={todo.id}
        onClick={() => navigate(`/SinglePage/${todo.id}`)}
        className={`cursor-pointer border-b transition-colors duration-200
          ${idx % 2 === 0 ? 'bg-slate-800' : 'bg-slate-750'}
          hover:bg-slate-700/50 border-slate-700`}
      >
        <td className="px-6 py-4 text-slate-300 text-sm">
          {todo.text}
        </td>

        <td className="px-6 py-4 text-slate-300 text-sm">
          {todo.description}
        </td>

        <td className="px-6 py-4 text-slate-300 text-sm">
          {todo.status}
        </td>

        <td
          className="px-6 py-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setEditing(todo)}
              className="p-2 hover:bg-blue-500/20 rounded-lg"
            >
              <Edit2 className="w-4 h-4 text-blue-400" />
            </button>

            <button
              onClick={() => handleConfirmDelete(todo.id)}
              className="p-2 hover:bg-red-500/20 rounded-lg"
            >
              <Trash2 className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </td>
      </tr>
    ))
  )}
</tbody>
   </table>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TodoTable;
