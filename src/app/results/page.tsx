'use client'
 
import { useSearchParams } from 'next/navigation'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('query')
   
    return <>Search: {search}</>
}