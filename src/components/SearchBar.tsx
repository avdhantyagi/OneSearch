"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const router = useRouter()
  return (
    <form action='/results' method= 'POST'className='max-w-[800px] w-full bg-gray-900 sm:w-3/4 md:w-2/3 lg:w-full flex flex-row rounded-lg justify-between text-blue-100 text-2xl p-0'>

        <input className='w-[inherit] p-4 bg-inherit outline-none rounded-3xl placeholder-gray-400 ml-3 new-amsterdam-regular' type="text" placeholder="Search..." name='query'/>

        <button type='submit' className='mr-5'>
            <i className="fa-solid fa-magnifying-glass"></i>
        </button>

    </form>
  )
}
