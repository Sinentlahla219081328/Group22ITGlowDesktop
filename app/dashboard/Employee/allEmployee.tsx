'use client';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function EmployeeAll(){
    interface Employee {
    employeeID : number;
    firstName : String;
    lastName: String;
    jobPosition: String;
    userName: String;
    password: String;
    email: String;
    mobileNumber: String;
    workTelephone: String;
    }
    const [employee, setEmployees] = useState<Employee[]>([]);
     
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ITGlowDesktop/employee/getall');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };
    fetch();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">  
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Schedules</h1>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border">Employee ID</th>
              <th className="py-2 border">Firstname</th>
              <th className="py-2 border">Lastname</th>
              <th className="py-2 border">Email</th>
              <th className="py-2 border">Job Position</th>
              <th className="py-2 border">Username</th>
              
            </tr>
          </thead>
          <tbody>
            {employee.map(employee => (
              <tr key={employee.employeeID}>
                <td className="py-2 border">{employee.employeeID}</td>
                <td className="py-2 border">{employee.firstName}</td>
                <td className="py-2 border">{employee.lastName}</td>
                <td className="py-2 border">{employee.email}</td>
                <td className="py-2 border">{employee.jobPosition}</td>
                <td className="py-2 border">{employee.userName}</td>
                <td className="py-2 border">
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );

}