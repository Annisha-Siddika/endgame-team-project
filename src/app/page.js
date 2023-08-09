import React from 'react';
import { GoReport } from 'react-icons/go';

const page = () => {
  return (
    <div>
      <div className='mt-10 flex gap-9'>
        <div>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
          </label>
        </div>
        <div>
          <button className="w-fit p-1 rounded bg-blue-400 text-2xl font-bold">Search</button>
        </div>
      </div>


      {/* cord  */}


      <div>

        <div className='h-28 w-44 border-solid border-2 bg-white border-indigo-600 p-2'>
          <h1>user</h1>
          <div className='flex justify-start items-center text-4xl font-bold mt-9'>
            <GoReport className='mr-5' />
            <h1 className='text-4xl font-bold'> 3000</h1>
          </div>
        </div>


        <div className='border-solid border-2 border-indigo-600'>
          <h1>user</h1>
          <div className='flex justify-center'>
            <GoReport />
            3000
          </div>
        </div>


        <div className='border-solid border-2 border-indigo-600'>
          <h1>user</h1>
          <div className='flex justify-center'>
            <GoReport />
            3000
          </div>
        </div>


      </div>



    </div>
  );
};

export default page;