import React from 'react'

const SearchTodo = ({searchItem , setSearchItem , searchPreiority , setSearchPriority }: any) => {

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-gray-800 rounded-lg shadow-md">
      {/* Search Input */}
      <div className="flex-1 w-full sm:w-auto">
        <input
         value={searchItem}
         onChange={(e) => setSearchItem(e.target.value)}
          type="search"
          placeholder="Search todos..."
          className="w-full px-4 py-2 border border-gray-300 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        />
      </div>

      {/* Status Filter */}
      <div className="w-full sm:w-auto">
        <select
         value={searchPreiority}
         onChange={(e)=> setSearchPriority(e.target.value)}
          className="w-full px-4  py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>
    </div>
  )
}

export default SearchTodo
