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
        <aside className="h-full w-96 mr-10  bg-[#101540] text-white ">
            <div className="flex justify-start items-center bg-[#588145] p-4">
                <div className="mr-4">
                    <Image
                        src="/icon.png"
                        width={150}
                        height={150}
                        alt="Picture of the author"
                    />
                </div>
                <h1 className="text-2xl">Electro Next</h1>
            </div>
            <ul className="mt-5 mb-5 ms-10 h-full bg-[#101540]">

                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <TbHomePlus className='text-4xl mr-5' />
                    <Link href="/">Dashboard</Link>
                </li>


                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <FaUserAlt className='text-4xl mr-5' />
                    <Link href="/manage-users">Manage Users</Link>
                </li>


                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <BiSolidCategoryAlt className='text-4xl mr-5' />
                    <Link href="/category">Category</Link>
                </li>


                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <AiOutlineIdcard className='text-4xl mr-5' />
                    <Link href="/products">Products</Link>
                </li>


                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <BsBank className='text-4xl mr-5' />
                    <Link href="/sales">Sales</Link>
                </li>


                <li className="text-2xl flex font-bold mt-10 mb-10 hover:text-blue-500" >
                    <GoReport className='text-4xl mr-5' />
                    <Link href="/report">Report</Link>
                </li>





                <li className="text-2xl flex font-bold mt-24 mb-10 hover:text-blue-500" >
                    <TbHomePlus className='text-4xl mr-5' />
                    <Link href="/products">log Out</Link>
                </li>

            </ul>
        </aside>
    );
};

export default Sidebar;
