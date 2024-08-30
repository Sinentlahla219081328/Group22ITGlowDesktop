'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const clients = [
  { id: 'C001', name: 'John Doe' },
  { id: 'C002', name: 'Jane Smith' },
];

const employees = [
  { id: 'E001', name: 'Alice Johnson' },
  { id: 'E002', name: 'Bob Brown' },
];

const NewAppointment = () => {
  const router = useRouter();
  const [appointmentData, setAppointmentData] = useState({
    appointmentId: '',
    clientId: '',
    employeeId: '',
    appointmentDate: '',
    appointmentTime: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setAppointmentData({
      ...appointmentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { appointmentId, clientId, employeeId, appointmentDate, appointmentTime } = appointmentData;

    try {
      const response = await fetch('http://localhost:8080/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: appointmentId,
          clientId,
          employeeId,
          date: appointmentDate,
          time: appointmentTime,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create appointment');
      }

      router.push('/dashboard/Schedule');
    } catch (err) {
      console.error('Error creating appointment:', err);
      // Handle error appropriately (e.g., display a message to the user)
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">New Appointment</button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">View Schedule</button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start rounded-lg ml-20 mt-20 bg-pink-100 w-1/2">
        <form onSubmit={handleSubmit} className="w-full p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="appointmentId">
              Appointment ID
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="appointmentId"
                value={appointmentData.appointmentId}
                onChange={handleChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="clientId">
              Client ID
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                name="clientId"
                value={appointmentData.clientId}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.id} - {client.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="employeeId">
              Employee ID
            </label>
            <div className="relative">
              <select
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                name="employeeId"
                value={appointmentData.employeeId}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select
                </option>
                {employees.map((employee) => (
                  <option key={employee.id} value={employee.id}>
                    {employee.id} - {employee.name}
                  </option>
                ))}
              </select>
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="appointmentDate">
              Date
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="date"
                name="appointmentDate"
                value={appointmentData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="appointmentTime">
              Time
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="time"
                name="appointmentTime"
                value={appointmentData.appointmentTime}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex space-x-4 justify-end">
            <button
              type="button"
              onClick={() => router.push('/dashboard/Schedule')}
              className="bg-gray-500 text-white font-bold py-4 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-4 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default NewAppointment;
