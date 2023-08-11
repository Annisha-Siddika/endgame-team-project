import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TbHomePlus } from 'react-icons/tb';
import { FaUserAlt } from 'react-icons/fa';
import { BiSolidCategoryAlt } from 'react-icons/bi';
import { AiOutlineIdcard } from 'react-icons/ai';
import { BsBank } from 'react-icons/bs';
import { GoReport } from 'react-icons/go';

const Sidebar = () => {



    return (
        <aside className="h-[100vh] w-[22%] mr-10  bg-[#101540] text-white">
            <div className="flex justify-center items-center bg-[#012c03]">
                <div>
                    <Image
                        src="/icon.png"
                        width={120}
                        height={120}
                        alt="Picture of the author"
                    />
                </div>
                <h1 className="text-xl hidden md:block font-bold">ElectroNext</h1>
            </div>
            <ul className="mt-4 mx-auto bg-[#101540] text-xs md:text-lg">

                <li className=" flex font-bold mt-4 hover:text-blue-500" >
                    <TbHomePlus className='text-xl mx-4' />
                    <Link href="/">Dashboard</Link>
                </li>


                <li className="flex font-bold mt-4 hover:text-blue-500" >
                    <FaUserAlt className='text-xl mx-4' />
                    <Link href="/manage-users">Manage Users</Link>
                </li>


                <li className="flex font-bold mt-4 hover:text-blue-500" >
                    <BiSolidCategoryAlt className='text-xl mx-4' />
                    <Link href="/category">Category</Link>
                </li>


                <li className="flex font-bold mt-4 hover:text-blue-500" >
                    <AiOutlineIdcard className='text-xl mx-4' />
                    <Link href="/products">Products</Link>
                </li>


                <li className="flex font-bold mt-4 hover:text-blue-500" >
                    <BsBank className='text-xl mx-4' />
                    <Link href="/sales">Sales</Link>
                </li>


                <li className="flex font-bold mt-4 hover:text-blue-500" >
                    <GoReport className='text-xl mx-4' />
                    <Link href="/report">Report</Link>
                </li>

                <li className="flex font-bold hover:text-blue-500 absolute bottom-0 mb-6" >
                    <TbHomePlus className='text-xl mx-4' />
                    <Link href="/products">log Out</Link>
                </li>

            </ul>
        </aside>
    );
};

export default Sidebar;
