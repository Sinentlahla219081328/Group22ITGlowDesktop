'use client';
import React from 'react';

import { useEffect, useState } from 'react';



export default function EmployeeForm (){
  const [employeeID, setEmployeeID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword]= useState('');
  const [email,  setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [workTelephone, setWorkTelephone] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const employee = { employeeID, firstName, lastName,jobPosition, userName, email, mobileNumber,workTelephone,password}

      const response = await fetch("http://localhost:8080/ITGlowDesktop/employee/create", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
      });

      if (response.ok) {
          // Handle successful response
          console.log('Employee created successfully');
      } else {
          // Handle error response
          console.error('Failed to create employee');
      }
  };

  const updateUser = async (id: number, userData: { name: string; email: string; }) => {
    try {
        const response = await axios.put(`http://localhost:8080/ITGlowDesktop/employee/update/${id}`, userData);
        console.log('User updated successfully:', response.data);
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
       <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
       <button
                   /* onClick={() => push(`app/dashboard/Employee/allEmployee.tsx/${employeeID}`)}
                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"*/
                  >
                    Get All
                  </button>
       </div>
    <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-semibold mb-6">Add New Employee</h2>
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
            <label className="block mb-2 text-sm font-medium text-gray-700">Employee Identification Number</label>
            <input
              type="text"
              value = {employeeID}
              onChange={(e) => setEmployeeID(e.target.value)}
              placeholder="Employee Identification Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Job Position</label>
            <input
              type="text"
              value = {jobPosition}
              onChange={(e) => setJobPosition(e.target.value)}
              placeholder="Enter Job Position"
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
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Work number</label>
            <input
              type="number"
              value = {workTelephone}
              onChange={(e) => setWorkTelephone(e.target.value)}
              placeholder="Enter Work Number"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value = {userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter username"
              className="w-full p-3 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="w-full p-3 border rounded-md"
            />
          </div>
        </div>
        <div className="flex space-x-4 ml-[900px] mt-[50px]">
        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg">
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

