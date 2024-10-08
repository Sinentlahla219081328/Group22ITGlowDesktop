'use client';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Page() {

  const [clientId, setClientId]= useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const client = { clientId, firstName, lastName, email, mobileNumber}

      const response = await fetch('http://localhost:8080/ITGlowDesktop/client/create',
      
          {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(client),
      });

      if (response.ok) {
          // Handle successful response
          console.log('Employee created successfully');
      } else {
          // Handle error response
          console.error('Failed to create employee');
      }
  };


  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
       <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">

       </div>
    <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add New Client</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 mb-6">
        
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              value = {firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value = {lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Client Identification Number</label>
            <input
              type="text"
              value = {clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="Client Identification Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
            <input
              type="number" 
              value = {mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Phone Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="w-full p-3 border rounded-md"
            />
          </div>

        </div>
        <div className="flex space-x-4 ml-[900px] mt-[50px]">
        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg"  onClick ={handleSubmit}>
            Save
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

