"use client";
import React from 'react'

export default function Card(props) {
  const {type, icon} = props
  
  return (
    <button className='bg-gray-800 lg:p-5 p-1 flex justify-center text-white items-center hover:bg-gray-700 rounded-lg h-10 w-full sm:h-40 lg:h-48'>
      <img className='h-full' src={icon} alt={type}/>
    </button>
  )
}
