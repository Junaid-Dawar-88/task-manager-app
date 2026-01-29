import React from 'react';

const Header = () => {



  return (
    <header className="w-full bg-gray-800 text-white flex items-center justify-between p-4 shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold">Task Manager</h1>
      <div className='h-12 w-12 flex items-center justify-center  rounded-full bg-white text-black border border-red-700'>
        <h1 className='p-1 font-semibold'>UR</h1>
      </div>
    </header>
  );
}

export default Header;
