
'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Employee {
  id: string;
}

const NewSchedule: React.FC = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [scheduleId, setScheduleId] = useState('');
  const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
  const [scheduleDate, setScheduleDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Fetch employees from the API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/employees'); // Adjust the endpoint as needed
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the save logic and connect to your database here
    axios.post('/api/schedules', { scheduleId, selectedEmployeeId, scheduleDate, startTime, endTime })
    router.push('/dashboard/Schedule'); // Redirect back to the schedule page after saving
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">  
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Create New Schedule</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Schedule ID</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={scheduleId}
              onChange={(e) => setScheduleId(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Employee ID</label>
            <select
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={selectedEmployeeId}
              onChange={(e) => setSelectedEmployeeId(e.target.value)}
              required
            >
              <option value="" disabled>
                Select
              </option>
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.id}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={scheduleDate}
              onChange={(e) => setScheduleDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Time</label>
            <input
              type="time"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => router.push('/dashboard/Schedule')}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewSchedule;