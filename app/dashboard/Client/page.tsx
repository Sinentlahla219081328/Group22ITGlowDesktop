'use client';
import React, { useState } from 'react';

export default function ClientRegistration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const client = { firstName, lastName, email, password };

    const response = await fetch('http://localhost:8080/ITGlow/client/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    });

    if (response.ok) {
      setMessage('Client registered successfully. You can log in using your email and password.');
      // Reset form fields after successful registration
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } else {
      setMessage('Failed to register client. Please try again.');
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <h1 className="text-2xl font-semibold text-white">Client Registration</h1>
      </div>
      <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-semibold mb-6">Register New Client</h2>
        {message && <p className="mb-4 text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter First Name"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter Last Name"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                className="w-full p-3 border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4 mt-6">
            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg">
              Register
            </button>
            <button type="button" className="bg-purple-600 text-white py-3 px-6 rounded-lg">
              Save & Add Another
            </button>
            <button type="button" className="bg-gray-300 text-gray-700 py-3 px-6 rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
