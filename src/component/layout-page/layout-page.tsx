import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import Home from "@/home-page/home-page";
import TodoTable from "../todo/todo-table/todo-table";
import SinglePage from "../single-page/single-page";

const LayOut = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div className="fixed max-w-sm:hide top-0 left-0 w-full h-16 z-50">
        <Header />
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <div className="fixed top-16 left-0 w-full z-50 md:hidden p-1 flex justify-start bg-white shadow">
        <button
          className="px-3 py-2 rounded bg-gray-200"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "✖" : "☰"}
        </button>
      </div>

      <div className="min-h-screen w-full ">
        {/* Sidebar */}
        <div
          className={`
            fixed top-16 max-sm:top-25 left-0  min-h-screen w-64 z-40
            bg-white
            transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0
          `}
        >
          <SideBar />
        </div>

        {/* Main content */}
        <div className="ml-0 md:ml-64 max-sm:mt-12  pt-16 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoTable />} />
            <Route path="/SinglePage/:id" element={<SinglePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default LayOut;
