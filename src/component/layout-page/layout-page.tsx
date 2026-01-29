import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import Home from "@/home-page/home-page";
import TodoTable from "../todo/todo-table/todo-table";
import SinglePage from "../single-page/single-page";


const LayOut = () => {

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <Header />
      </div>

      <div className="min-h-screen  w-full">
        <div className="fixed top-22 left-0 min-h-screen w-64 z-40">
          <SideBar />
        </div>

        <div className="ml-64 pt-16 p-4">
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
