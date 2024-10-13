'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EmployeeManager() {
  // Employee List State
  interface Employee {
    employeeID: number;
    firstName: string;
    lastName: string;
    jobPosition: string;
    userName: string;
    password: string;
    email: string;
    mobileNumber: string;
    workTelephone: string;
  }
  
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [employeeID, setEmployeeID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [workTelephone, setWorkTelephone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ITGlowDesktop/employee/getall');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const employee = {
      employeeID, firstName, lastName, jobPosition, userName, password, email, mobileNumber, workTelephone
    };

    try {
      const response = await fetch("http://localhost:8080/ITGlowDesktop/employee/create", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        setMessage('Employee created successfully');
        // Reset form fields
        setEmployeeID('');
        setFirstName('');
        setLastName('');
        setJobPosition('');
        setUserName('');
        setPassword('');
        setEmail('');
        setMobileNumber('');
        setWorkTelephone('');
        // Refetch employee list
        const updatedEmployees = await axios.get('http://localhost:8080/ITGlowDesktop/employee/getall');
        setEmployees(updatedEmployees.data);
        setShowForm(false); // Hide form after successful addition
      } else {
        setMessage('Failed to create employee');
      }
    } catch (error) {
      console.error('Failed to create employee:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <h1 className="text-3xl font-bold">Employee Management</h1>
      </div>

      {/* Show Form Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
      >
        Add New Employee
      </button>

      {/* Form for Adding Employee */}
      {showForm && (
        <div className="bg-white p-10 rounded-lg shadow-lg mt-10">
          <h2 className="text-2xl font-semibold mb-6">Add New Employee</h2>
          {message && <p className="mb-4 text-red-500">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Form Inputs */}
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
                <label className="block mb-2 text-sm font-medium text-gray-700">Employee ID</label>
                <input
                  type="text"
                  value={employeeID}
                  onChange={(e) => setEmployeeID(e.target.value)}
                  placeholder="Employee ID"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Job Position</label>
                <input
                  type="text"
                  value={jobPosition}
                  onChange={(e) => setJobPosition(e.target.value)}
                  placeholder="Job Position"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Work Telephone</label>
                <input
                  type="number"
                  value={workTelephone}
                  onChange={(e) => setWorkTelephone(e.target.value)}
                  placeholder="Work Telephone"
                  className="w-full p-3 border rounded-md"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Username"
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
                  placeholder="Password"
                  className="w-full p-3 border rounded-md"
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 mt-6">
              <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg" disabled={isSubmitting}>
                {isSubmitting ? 'Saving...' : 'Save'}
              </button>
              <button type="button" onClick={() => setShowForm(false)} className="bg-gray-300 text-gray-700 py-3 px-6 rounded-lg">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Employee List */}
      <div className="container mx-auto py-8 mt-10">
        <h1 className="text-2xl font-bold mb-4">Employees</h1>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border">Employee ID</th>
              <th className="py-2 border">First Name</th>
              <th className="py-2 border">Last Name</th>
              <th className="py-2 border">Email</th>
              <th className="py-2 border">Job Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.employeeID}>
                <td className="py-2 border">{employee.employeeID}</td>
                <td className="py-2 border">{employee.firstName}</td>
                <td className="py-2 border">{employee.lastName}</td>
                <td className="py-2 border">{employee.email}</td>
                <td className="py-2 border">{employee.jobPosition}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
