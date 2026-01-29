import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handlePostData, handleUpdateTodo, type Todos } from "@/api-call/api-call";
import { useUpdateTodo } from "../query/update-query";
import usePostTodo from "../query/post-query";

const TodoModal = ({ editing , setEditing , todos, setTodos }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const updateMutation = useUpdateTodo()
  const postMutation = usePostTodo()

  // ================= PREFILL WHEN EDIT =================
  useEffect(() => {
    if (editing) {
      setText(editing.text);
      setDescription(editing.description);
      setStatus(editing.status);
      setShowModal(true);
    }
  }, [editing]);

  // ================= ADD / UPDATE HANDLER =================
  const handleSubmit = () => {
  if (!text) return alert("Please fill the input text!");
  if (editing) {
    updateMutation.mutate({
      id: editing.id,
      updatedData: { text, description, status },
    });
  } else {
    const newTodo: Todos = {
      id: Date.now(), 
      text,
      description,
      status: status || 'pending',
    };

    setTodos((prev: Todos[]) => [...prev, newTodo]);

    postMutation.mutate(newTodo, {
      onError: () => {
        alert("Failed to add todo!");
      },
    });

    setShowModal(false);
  }

  setText("");
  setDescription("");
  setStatus("pending");
};



  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
      >
        <Plus size={20} /> Add New Todo
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl w-full max-w-md border border-slate-700 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">
                {editing ? "Update Task" : "Create New Task"}
              </h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="text-slate-400 hover:text-white transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Task Title
                </label>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Description (Optional)
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white"
                >
                  <option value="pending">pending</option>
                  <option value="completed">completed</option>
                  <option value="urgent">urgent</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3 p-6 border-t border-slate-700">
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditing(null);
                }}
                className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={() =>{
                 handleSubmit()
                  setShowModal(false)
                 
                }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg"
              >
                {editing ? "Update Task" : "Add Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoModal;
