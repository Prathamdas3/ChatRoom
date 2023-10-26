'use client';
import React from 'react';
import Card from '@/components/Cards';
import { useApiContextProvider } from '@/context/DataContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { isUser } = useApiContextProvider();
  const router = useRouter();

  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center min-h-screen py-2 gap-4">
        <div className="flex gap-3">
          <div
            onClick={() =>
              isUser && isUser ? router.push('/chat') : router.push('/authPage')
            }
          >
            <Card
              title="Chat room"
              des="Join any chat group with a single key "
            />
          </div>
          <div
            onClick={() =>
              isUser && isUser
                ? router.push('/datastore')
                : router.push('/authPage')
            }
          >
            <Card
              title="Store Data"
              des="Store your data here with build in data store"
            />
          </div>
        </div>
      </div>
    </>
  );
}
// (localStorage.getItem('user') === 'true' ? true : false)
