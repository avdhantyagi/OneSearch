'use client'

import { useSearchParams } from 'next/navigation';
import Card from '@/components/Card';
import Category from '@/components/Category';
import React, { Suspense } from 'react';

function Card2(props) {
    const { type, icon, title } = props;

    return (
        <div className="bg-gray-800 lg:p-8 p-1 flex justify-center text-white items-center hover:bg-gray-700 rounded-lg h-10 w-full sm:h-40 lg:h-48">
            <img className="h-full lg:h-28 mr-[1vh]" src={icon} alt={type} />
            <p className="text-2xl inline lg:text-5xl">{title}</p>
        </div>
    );
}

function ResultsContent() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    return (
        <div className="grid w-[300px] sm:grid-cols-1 sm:min-w-[400px] md:min-w-[600px] lg:w-[800px] lg:grid:cols-2 gap-4 md:grid-cols-2 p-4 min-h-[50vh]">
            <a href={`https://www.google.com/search?q=${query}`} target="_blank">
                <Card type="Google" icon="/google.svg" />
            </a>
            <a href={`https://www.bing.com/search?form=&q=${query}`} target="_blank">
                <Card type="Bing" icon="bing.svg" />
            </a>
            <a href={`https://chat.openai.com/?model=gpt-4&q=${query}`} target="_blank">
                <Card2 type="ChatGPT" icon="chatgpt.png" title="ChatGPT" />
            </a>
            <a href={`${query}`}><Card /></a>
        </div>
    );
}

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen items-center max-w-[800px] min-w-[300px]">
            <div className="text-white new-amsterdam-regular mt-[10vh] text-6xl lg:text-8xl lg:mt-[15vh] lg:mb-8">
                OneSearch
            </div>
            <div className="flex flex-row justify-evenly w-full p-0 lg:p-2">
                <Category type="Search" />
                <Category type="Gen AI" />
                <Category type="Streaming" />
                <Category type="All" />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <ResultsContent />
            </Suspense>
        </div>
    );
}
