import React from 'react';
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r border-black flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">My App</h1>
      <ul className="flex flex-col gap-4">
        <li>
          <Link to="/" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/todo" className="block px-4 py-2 rounded hover:bg-gray-700 hover:text-white transition">
            Create Todo
          </Link>
        </li>
       
      </ul>
    </div>
  );
}

export default SideBar;
