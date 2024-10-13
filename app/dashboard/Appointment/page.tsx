'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';

interface Client {
  id: string;
}

interface Employee {
  id: string;
}

interface Appointment {
  appointmentID?: string;
  clientId: string;
  employeeID: string;
  date: string;
  time: string;
}

const AppointmentForm: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const { appointmentID } = params; // Extracting appointmentID from params

  const [clients, setClients] = useState<Client[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [formData, setFormData] = useState<Appointment>({
    clientId: '',
    employeeID: '',
    date: '',
    time: '',
  });
  const [error, setError] = useState<string | null>(null);
  const isUpdate = Boolean(appointmentID); // Check if updating or creating

  // Fetch clients and employees from the API
  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ITGlowDesktop/client');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:8080/ITGlowDesktop/employee');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchClients();
    fetchEmployees();
    
    // If updating, fetch the appointment details
    if (isUpdate) {
      const fetchAppointment = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/ITGlowDesktop/appointment/read/${appointmentID}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error fetching appointment:', error);
          setError('Failed to load appointment details.');
        }
      };
      fetchAppointment();
    }
  }, [appointmentID]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous error

    if (!formData.clientId || !formData.employeeID || !formData.date || !formData.time) {
      setError('All fields are required.');
      return;
    }

    try {
      if (isUpdate) {
        await axios.post(`http://localhost:8080/ITGlowDesktop/appointment/update`, { ...formData, appointmentID });
      } else {
        await axios.post(`http://localhost:8080/ITGlowDesktop/appointments`, formData);
      }
      router.push('/dashboard/Appointment');
    } catch (error) {
      console.error('Error saving appointment:', error);
      setError('Failed to save appointment. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{isUpdate ? 'Update' : 'Create New'} Appointment</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Error message */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Client ID</label>
          <select
            name="clientId"
            value={formData.clientId}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          >
            <option value="" disabled>Select a client</option>
            {clients.map(client => (
              <option key={client.id} value={client.id}>{client.id}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Employee ID</label>
          <select
            name="employeeID"
            value={formData.employeeID}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          >
            <option value="" disabled>Select an employee</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>{employee.id}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 p-2 border w-full"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => router.push('/dashboard/Appointment')}
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
  );
};

export default AppointmentForm;
