'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation'; // Updated imports

interface Appointment {
  appointmentID: string;
  clientId: string;
  employeeID: string;
  date: string;
  time: string;
}

const UpdateAppointment: React.FC = () => {
  const [appointment, setAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState<Partial<Appointment>>({});
  const router = useRouter();
  const params = useParams(); // Using useParams to get route parameters

  const { appointmentID } = params; // Extracting appointmentID

  // Fetch appointment details
  useEffect(() => {
    if (appointmentID) {
      const fetchAppointment = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/ITGlowDesktop/appointment/read/${appointmentID}`);
          setAppointment(response.data);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching appointment:', error);
        }
      };
      fetchAppointment();
    }
  }, [appointmentID]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8080/ITGlowDesktop/appointment/update`, formData);
      router.push('/dashboard/Appointment');
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  if (!appointment) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Update Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Client ID</label>
          <input
            type="text"
            name="clientId"
            value={formData.clientId || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employeeID"
            value={formData.employeeID || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time || ''}
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
          onClick={() => router.push('/dashboard/Appointment')}
          className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateAppointment;
