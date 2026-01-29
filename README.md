# bun-react-tailwind-template

To install dependencies:

```bash
bun install
```

To start a development server:

```bash
bun dev
```

To run for production:

```bash
bun start
```

<!-- TASK MANAGER APPLICATION -->

A modern Task Manager application built using Bun, Prisma (SQLite), and TanStack Query. The project
focuses on performance, clean architecture, and a smooth user experience.

<!-- TECH STACK -->

Frontend: React, TypeScript, TanStack Query, Axios, Tailwind CSS
Backend: Bun, Prisma ORM, SQLite

<!-- FEATURES -->

• Create tasks
• View task details in a separate card component
• Update tasks
• Delete tasks
• Instant UI updates using TanStack Query
• Persistent data storage with SQLite

<!-- HOW IT WORKS  -->

Users can create tasks that are stored in a SQLite database using Prisma. TanStack Query handles data
fetching, caching, and synchronization. Clicking on any task opens a separate card component displaying
full task details.

<!-- PROJECT STRUCTURE OVERVIEW -->

The project is organized into frontend components, API handlers, Prisma schema files, and a Bun-powered
backend server for clean separation of concerns.


<!-- SETUP INSTRUCTIONS -->

• Clone the repository
• Install dependencies using bun install
• Run Prisma migrations
• Start the backend server
• Run the frontend development server


<!-- FUTURE ENHANCEMENTS -->

• Authentication and authorization
• Task priorities and due dates
• Search and filtering
• Dark mode
• Mobile-first improvements

This project is ideal for learning modern full-stack development using Bun and TanStack Query.



This project was created using `bun init` in bun v1.3.1. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
