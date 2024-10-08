'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation'; // Updated imports

interface Schedule {
  scheduleId: string;
  employeeId: string;
  scheduleDate: string;
  startTime: string;
  endTime: string;
}

const UpdateSchedule: React.FC = () => {
  const [schedule, setSchedule] = useState<Schedule | null>(null);
  const [formData, setFormData] = useState<Partial<Schedule>>({});
  const router = useRouter();
  const params = useParams(); // Using useParams to get route parameters

  const { scheduleId } = params; // Extracting scheduleId

  // Fetch schedule details
  useEffect(() => {
    if (scheduleId) {
      const fetchSchedule = async () => {
        try {
          const response = await axios.get(`/api/schedule/read/${scheduleId}`);
          setSchedule(response.data);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching schedule:', error);
        }
      };
      fetchSchedule();
    }
  }, [scheduleId]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`/api/schedule/update`, formData);
      router.push('/dashboard/Schedule');
    } catch (error) {
      console.error('Error updating schedule:', error);
    }
  };

  if (!schedule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Update Schedule</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={formData.employeeId || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="scheduleDate"
            value={formData.scheduleDate || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Start Time</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">End Time</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => router.push('/dashboard/Schedule')}
          className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateSchedule;
