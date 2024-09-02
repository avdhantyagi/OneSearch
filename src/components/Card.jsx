"use client";
import React from 'react'
import Image from 'next/image';

export default function Card(props) {
  const {type, icon} = props
  
  return (
    <div className='bg-gray-800  rounded-lg h-10 w-full sm:h-40 lg:h-48'>
      <img src={icon}/>
      <p>{type}</p>
    </div>
  )
}
