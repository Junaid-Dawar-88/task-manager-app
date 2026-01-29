import { useParams, useNavigate } from "react-router-dom";
import useGetTodoById from "../todo/query/get-single-page";

const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const todoId = Number(id);
  const { data, isLoading, error } = useGetTodoById(todoId);

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (error) return <p className="p-6">Error loading todo</p>;
  if (!data) return <p className="p-6">No todo found</p>;

  return (
    <>
      <button
        onClick={() => navigate("/todo")}
        className="fixed top-24 left-6 z-50 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
      <div className=" fixed inset-0 z-40 flex items-center justify-center bg-black/40">
    
        <div className="w-full max-w-xl mx-4 bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            {data.text}
          </h2>

          <p className="text-gray-600 mb-6">
            {data.description}
          </p>

          <span className="inline-block px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
            {data.status}
          </span>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
