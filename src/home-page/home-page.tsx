import React, { useState } from 'react';
import { CheckCircle2, Zap, BarChart3, Bell } from 'lucide-react';
import TodoTable from '@/component/todo/todo-table/todo-table';
import { Link } from 'react-router-dom';

const Home = () => {

    const openTodo = () => {
        <TodoTable />
    }
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 border rounded-full text-sm text-gray-600 mb-6">
            ✓ Stay organized and productive
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Manage Your Tasks
            <span className="text-indigo-600"> Effortlessly</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize, prioritize, and complete your tasks with our simple and intuitive todo app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              Start for Free
            </button>
            <button className="px-8 py-3 border rounded-full font-semibold hover:bg-gray-100 transition">
              View Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-indigo-600">100K+</div>
              <p className="text-gray-500 text-sm">Active Users</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">5M+</div>
              <p className="text-gray-500 text-sm">Tasks Completed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">4.8★</div>
              <p className="text-gray-500 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose TaskFlow?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: CheckCircle2, title: 'Smart Organization', desc: 'Create lists and organize tasks easily' },
              { icon: Bell, title: 'Smart Reminders', desc: 'Never miss deadlines again' },
              { icon: BarChart3, title: 'Track Progress', desc: 'See your productivity grow' },
              { icon: Zap, title: 'Fast & Simple', desc: 'Smooth and distraction-free UI' },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 border rounded-2xl hover:shadow-sm transition bg-gray-50"
              >
                <feature.icon className="mb-4 text-indigo-600" size={32} />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border rounded-3xl p-12 text-center bg-indigo-50">
            <h2 className="text-4xl font-bold mb-4">Ready to get organized?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of users boosting productivity.
            </p>
            <Link
              to='/todo'
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition">
              Create Your First Task
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2026 TaskFlow. All rights reserved.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-500 hover:text-indigo-600 transition text-sm"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
