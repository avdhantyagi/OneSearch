'use client'
 
import { useSearchParams } from 'next/navigation'
import Card from '@/components/Card';
import Category from '@/components/Category'

import React from 'react';

export default function Page() {
    const searchParams = useSearchParams()
    const query = searchParams.get('query')
   
    return (
    <div className='flex flex-col min-h-screen items-center max-w-[800px]'>
        <div className='text-white new-amsterdam-regular lg:text-8xl lg:mt-[15vh] lg:mb-8' >OneSearch</div>
        <div className='flex flex-row justify-center w-full'>
            <Category type='Search'/>
            <Category type='Gen AI'/>
            <Category type='Streaming'/>
        </div>
        <div className='grid sm:grid-cols-1 sm:w-[400px] md:min-w-[600px] lg:w-[800px] lg:grid:cols-2 gap-4 md:grid-cols-2 p-4 min-h-[50vh]'>
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