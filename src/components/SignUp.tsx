'use client';
import { auth } from '@/config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext } from 'react';
import { apiContext } from '@/context/DataContext';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUpPage({ isUser, setIsUser }: AuthProp) {
  const data = useContext(apiContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();
  const notify = () =>
    toast.success('Successfully Logged In', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  const signUp = async () => {
    if (password.length > 8) {
      if (password === confirmPassword) {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          setIsUser(true);
          localStorage.setItem('user', true);
          router.push('/');
        } catch (err) {
          alert('Email is already in use');
        }
      } else {
        alert('Password does not match the confirm password');
      }
    } else {
      alert('Password should have at least 8 characters');
    }
  };

  return (
    <>
      {/* signUp */}

      <div className="grid gap-y-4">
        {/* <!-- Form Group --> */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm mb-2 dark:text-white"
          >
            Username
          </label>
          <div className="relative flex">
            <input
              type="text"
              name="username"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              onChange={(e) => data.setUserName(e.target.value)}
              required
              // aria-describedby="email-error"
            />
            <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                // aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>
        {/* <!-- End Form Group --> */}

        {/* profile name collection */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              onChange={(e) => setEmail(e.target.value)}
              required
              // aria-describedby="email-error"
            />
            <div className="hidden absolute inset-y-0 right-0  items-center pointer-events-none pr-3">
              <svg
                className="h-5 w-5 text-red-500"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                // aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>
        {/* <!-- End of profile name--> */}

        {/* <!-- Form Group --> */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm mb-2 dark:text-white"
          >
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby="password-error"
            />
          </div>
        </div>
        {/* <!-- End Form Group --> */}

        {/* <!-- Form Group --> */}
        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm mb-2 dark:text-white"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              required
              aria-describedby="confirm-password-error"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
          onClick={signUp || notify}
        >
          <ToastContainer />
          Sign up
        </button>
      </div>
    </>
  );
}
