'use client'
 
import { useSearchParams } from 'next/navigation'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams()
 
    const query = searchParams.get('query')
   
    return <>Search: {query}</>
}