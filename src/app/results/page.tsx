'use client'
 
import { useSearchParams } from 'next/navigation'
import Card from '@/components/Card';
import Category from '@/components/Category'

import React from 'react';

export default function Page() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
   
    return (
    <div className='flex flex-col min-h-screen items-center max-w-[800px] min-w-[300px]'>
        <div className='text-white new-amsterdam-regular mt-[10vh] text-6xl lg:text-8xl lg:mt-[15vh] lg:mb-8' >OneSearch</div>
        <div className='flex flex-row justify-between w-full p-0 lg:p-2'>
            <Category type='Search'/>
            <Category type='Gen AI'/>
            <Category type='Streaming'/>
        </div>
        <div className='grid w-[300px] sm:grid-cols-1 sm:min-w-[400px] md:min-w-[600px] lg:w-[800px] lg:grid:cols-2 gap-4 md:grid-cols-2 p-4 min-h-[50vh]'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
    )
}