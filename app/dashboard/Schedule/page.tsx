'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface Schedule {
  scheduleId: string;
  employeeId: string;
  scheduleDate: string;
  startTime: string;
  endTime: string;
}

interface Employee {
  id: string;
}

const CombinedSchedulePage: React.FC = () => {
  const router = useRouter();
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [formData, setFormData] = useState<Partial<Schedule>>({
    scheduleId: '',
    employeeId: '',
    scheduleDate: '',
    startTime: '',
    endTime: ''
  });

  // Fetch schedules and employees
  useEffect(() => {
    const fetchData = async () => {
      try {
        const scheduleResponse = await axios.get('http://localhost:8080/ITGlowDesktop/schedules'); // Fetch schedules
        setSchedules(scheduleResponse.data);

        const employeeResponse = await axios.get('http://localhost:8080/ITGlowDesktop/employees'); // Fetch employees
        setEmployees(employeeResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission for creating/updating
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (selectedSchedule) {
        // If a schedule is selected, update it
        await axios.post(`/api/schedule/update`, formData);
      } else {
        // If no schedule is selected, create a new one
        await axios.post(`/api/schedule/create`, formData);
      }
      router.push('/dashboard/Schedule'); // Redirect or refresh
    } catch (error) {
      console.error('Error saving schedule:', error);
    }
  };

  // Handle selecting a schedule for editing
  const handleEdit = (schedule: Schedule) => {
    setSelectedSchedule(schedule);
    setFormData(schedule); // Pre-fill the form with the selected schedule's data
  };

  // Handle deleting a schedule
  const handleDelete = async (scheduleId: string) => {
    try {
      await axios.delete(`/api/schedule/delete/${scheduleId}`);
      setSchedules(schedules.filter(schedule => schedule.scheduleId !== scheduleId));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">  
      </div>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Schedules</h1>

        {/* Schedule List */}
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="px-4 py-2">Schedule ID</th>
              <th className="px-4 py-2">Employee ID</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Start Time</th>
              <th className="px-4 py-2">End Time</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule) => (
              <tr key={schedule.scheduleId}>
                <td className="border px-4 py-2">{schedule.scheduleId}</td>
                <td className="border px-4 py-2">{schedule.employeeId}</td>
                <td className="border px-4 py-2">{schedule.scheduleDate}</td>
                <td className="border px-4 py-2">{schedule.startTime}</td>
                <td className="border px-4 py-2">{schedule.endTime}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(schedule)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(schedule.scheduleId)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form to Create/Update Schedule */}
        <div className="mt-6">
          <h2 className="text-xl font-bold">{selectedSchedule ? 'Update Schedule' : 'Create New Schedule'}</h2>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Schedule ID</label>
              <input
                type="text"
                name="scheduleId"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.scheduleId || ''}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Employee ID</label>
              <select
                name="employeeId"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.employeeId || ''}
                onChange={handleChange}
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
                name="scheduleDate"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.scheduleDate || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Start Time</label>
              <input
                type="time"
                name="startTime"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.startTime || ''}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">End Time</label>
              <input
                type="time"
                name="endTime"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                value={formData.endTime || ''}
                onChange={handleChange}
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
      </div>
    </main>
  );
};

export default CombinedSchedulePage;
