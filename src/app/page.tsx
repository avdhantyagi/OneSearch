'use client';
 
import SearchBar from '@/components/SearchBar';
import { useRouter } from 'next/navigation';
 
export default function Page() {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-gray-950 flex flex-col justify-center mx-auto items-center'>
      <SearchBar />
    </div>
  )
}