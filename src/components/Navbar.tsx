'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Profile from '@/assets/images/profile.jpg';
import { auth } from '@/config/firebase';
import { signOut } from 'firebase/auth';
import { apiContext } from '@/context/DataContext';
import { useRouter } from 'next/navigation';

export default function Page() {
  const data = useContext(apiContext);
  const router = useRouter();

  const logOut = async () => {
    try {
      await signOut(auth);

      localStorage.removeItem('user');
      localStorage.removeItem('userName');
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex items-center mx-auto w-[90%] p-2 min-h-16  bg-base-100 ">
      <div className="flex-1">
        <h2
          className=" normal-case text-2xl font-bold"
          onClick={() =>
            localStorage.getItem('user') || data.isUser
              ? router.push('/')
              : router.push('/authPage')
          }
        >
          ChatRoom
        </h2>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={Profile} alt="profile" width={20} height={20} />
            </div>
          </label>
          {localStorage.getItem('user') || data.isUser ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          ) : (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={() => router.push('/authPage')}>
                  Sign In
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
