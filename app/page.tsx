"use client";
import Link from 'next/link';
import Logo from '@/uicomponents/dashboard/logo';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Make sure to import from 'next/navigation'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // For displaying error messages
  const router = useRouter(); // Initialize useRouter

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setErrorMessage(''); // Reset error message when closing the modal
  };

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8080/ITGlow/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      closeModal();
      // Redirect to the dashboard on successful login
      router.push('/dashboard'); // Ensure this route exists
    } else {
      const errorMessage = await response.text();
      setErrorMessage(errorMessage); // Set error message for display
      console.error(errorMessage);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <Logo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-pink-200 px-6 py-10 md:w-2/5 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to ITGLOW, where style meets innovation.</strong>
          </p>
          <button
            className="flex items-center gap-5 self-start rounded-lg bg-pink-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            onClick={openModal}
          >
            <span>Log in</span>
          </button>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12"></div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            {errorMessage && (
              <div className="mb-4 text-red-500">{errorMessage}</div>
            )}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
