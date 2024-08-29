'use client';
import React from 'react';
import { useEffect, useState } from 'react';



export default function EmployeeForm (){
 const [employee, setEmployee] =useState('')
 useEffect(()=>{
  fetch('http://localhost:8080/employee/update')
  .then((response)=> response.text())
  .then((employee) =>{
    setEmployee(employee);
  });
 }, []);

 //we create new employee
 const postEmployee =async() =>{

  const response = await fetch ('http://localhost:8080/employee/create', {
    method: 'Post',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({message: 'Hello from Next.js'}),

  });
  const result = await response.text();
    console.log(result);
  };

 

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
       <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">

       </div>
    <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add New Employee</h2>
      <form>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Job Position</label>
            <input
              type="text"
              placeholder="Enter Job Position"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter Work Email Address"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>
        <div className="flex space-x-4 ml-[900px] mt-[50px]">
          <button onClick = {postEmployee} >
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

