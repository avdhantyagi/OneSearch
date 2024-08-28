"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const query = router.query;

  return (
    <div>
      <h1>Search Results for: {query}</h1>
      {/* Your search results content here */}
    </div>
  );
}