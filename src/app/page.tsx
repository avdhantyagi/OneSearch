'use client';
 
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

 
export default function Page() {
  const [query, setQuery] = useState('');
  
  return (
    <div className='min-h-screen flex flex-col justify-center mx-auto items-center'>
      <SearchBar setQuery = {setQuery} query={query}/>
    </div>
  )
}