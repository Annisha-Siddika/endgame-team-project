import Image from 'next/image';
import React from 'react';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BiPlus, BiSolidCategoryAlt } from 'react-icons/bi';
import { BsBank, BsBell, BsMoon } from 'react-icons/bs';
import { FaRegUser, FaRegUserCircle } from 'react-icons/fa';

const page = () => {
  return (
    <div className='w-full bg-gray-300 p-6 ml-[25%]'>
      <div className='flex justify-end pr-2 bg-white border-gray-600 border-2 rounded-lg py-4'>
        <BsMoon className='text-[#101540] mx-2' />
        <BsBell className='text-[#101540] mx-2' />
        <FaRegUserCircle className='text-[#101540] mx-2' />
      </div>
      <div className='mx-auto md:flex justify-center gap-4 my-4'>
        <div className='p-4 mb-4 rounded-xl bg-white shadow-lg w-full '>
          <h3 className='font-bold text-xl'>User</h3>
          <div className='flex text-3xl justify-start items-center'>
            <FaRegUser /> <BiPlus className='text-green-800' />
            <p>30,000</p>
          </div>
        </div>
        <div className='p-4 mb-4 rounded-xl bg-white shadow-lg w-full '>
          <h3 className='font-bold text-xl'>Products</h3>
          <div className='flex text-3xl justify-start items-center'>
            <AiOutlineIdcard /> <BiPlus className='text-green-800' />
            <p>30,000</p>
          </div>
        </div>
        <div className='p-4 mb-4 rounded-xl bg-white shadow-lg w-full '>
          <h3 className='font-bold text-xl'>Category</h3>
          <div className='flex text-3xl justify-start items-center'>
            <BiSolidCategoryAlt /> <BiPlus className='text-green-800' />
            <p>30,000</p>
          </div>
        </div>
        <div className='p-4 mb-4 rounded-xl bg-white shadow-lg w-full '>
          <h3 className='font-bold text-xl'>Sales</h3>
          <div className='flex text-3xl justify-start items-center'>
            <BsBank /> <BiPlus className='text-green-800' />
            <p>30,000</p>
          </div>
        </div>
      </div>
      <div className='mx-auto md:grid grid-cols-6 gap-4'>
        <div className='col-span-4 mb-4 bg-white shadow-lg rounded-lg'>
          <Image
            src="/chart.png"
            width={600}
            height={80}
            alt="Picture of chart"
          />
        </div>
        <div className='col-span-2 mb-4 bg-white shadow-lg rounded-lg'>
        <h3 className='font-semibold pl-4 pt-2'>Top Selling Product</h3>

        <Image
            src="/topsell.jpg"
            width={300}
            height={80}
            alt="Picture of chart"
          />
          <h3 className='font-bold text-xl pl-4'>$40</h3>
        </div>
      </div>
      <div className='mx-auto md:grid grid-cols-6 gap-4'>
        <div className='col-span-4 mb-4 bg-white shadow-lg rounded-lg p-4'>
          <h3 className='border-2 border-b-gray-500 text-xl font-semibold mb-4'>Recent Added Products</h3>
          <div className='w-full'>
            <ul className='flex font-semibold mb-2 w-full justify-between'>
              <li>Name</li>
              <li>Photo</li>
              <li>Quantity</li>
              <li>Price</li>
              <li>Date</li>
            </ul>
            <ul className='flex font-semibold justify-between'>
              <li>Name</li>
              <li>Photo</li>
              <li className='text-gray-500'>Quantity</li>
              <li>Price</li>
              <li className='text-gray-500'>Date</li>
            </ul>
            <ul className='flex font-semibold justify-between'>
              <li>Name</li>
              <li>Photo</li>
              <li className='text-gray-500'>Quantity</li>
              <li>Price</li>
              <li className='text-gray-500'>Date</li>
            </ul>
            <ul className='flex font-semibold justify-between'>
              <li>Name</li>
              <li>Photo</li>
              <li className='text-gray-500'>Quantity</li>
              <li>Price</li>
              <li className='text-gray-500'>Date</li>
            </ul>
          </div>

        </div>
        <div className='col-span-2 mb-4 bg-white shadow-lg rounded-lg p-4'>
        <h3 className='border-2 border-b-gray-500 text-xl font-semibold mb-4'>Top Selling Products</h3>
        <div className='w-full'>
        <ul className='flex font-semibold mb-2 w-full justify-between'>
              <li>Name</li>
              <li>Price</li>
              <li>Date</li>
        </ul>
        <ul className='flex font-semibold w-full justify-between'>
              <li>Name</li>
              <li>Price</li>
              <li>Date</li>
        </ul>
        <ul className='flex font-semibold w-full justify-between'>
              <li>Name</li>
              <li>Price</li>
              <li>Date</li>
        </ul>
        <ul className='flex font-semibold w-full justify-between'>
              <li>Name</li>
              <li>Price</li>
              <li>Date</li>
        </ul>

        </div>
        </div>
      </div>
    </div>
  );
};

export default page;