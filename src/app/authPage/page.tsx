'use client';
import { auth, googleAuth } from '@/config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState, useContext } from 'react';
import { apiContext } from '@/context/DataContext';
import SignUpPage from '@/components/SignUp';
import LoginPage from '@/components/LogIn';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthPage = () => {
  let authDetails = useContext(apiContext);
  const [change, setChange] = useState<boolean>(true);
  const router = useRouter();
  const notify = () => {
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
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
      authDetails.setIsUser(true);

      authDetails.setUserName(auth.currentUser.displayName);
      localStorage.setItem('user', true);
      router.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen items-center py-16 justify-center  ">
        <div className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              {change ? (
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign in
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Do not have an account yet?
                    <button
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      onClick={() => setChange(false)}
                    >
                      Sign up here
                    </button>
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                    Sign up
                  </h1>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?
                    <button
                      className="text-blue-600 decoration-2 hover:underline font-medium"
                      onClick={() => setChange(true)}
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
              )}

              {/* start sign in with google */}
              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                  onClick={signInWithGoogle || notify}
                >
                  <ToastContainer />
                  <svg
                    className="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign in with Google
                </button>
              </div>
              {/* end of google sign in */}

              {/* start other option */}
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>
              {change ? (
                <LoginPage
                  setIsUser={authDetails.setIsUser}
                  isUser={authDetails.isUser}
                />
              ) : (
                <SignUpPage
                  setIsUser={authDetails.setIsUser}
                  isUser={authDetails.isUser}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
