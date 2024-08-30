'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SchedulePage = () => {
  const router = useRouter();
  
  // Sample data (replace with data fetched from your database)
  const [appointments, setAppointments] = useState([
    { id: 1, clientId: 'C001', employeeId: 'E001', date: '2024-09-01', time: '10:00' },
    { id: 2, clientId: 'C002', employeeId: 'E002', date: '2024-09-02', time: '11:00' },
    // Add more sample appointments if necessary
  ]);

  const handleDelete = (id: number) => {
    setAppointments(appointments.filter(appointment => appointment.id !== id));
    // Implement actual delete logic to remove from the database as well
  };

  const handleUpdate = (appointment: any) => {
    // Redirect to a form with the specific appointment details for updating
    // Note: If you need an update form, you should create a separate route for updating appointments
    router.push(`/dashboard/Appointment/update/${appointment.id}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Scheduled Appointments</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Appointment ID</th>
            <th className="py-2 px-4 border-b">Client ID</th>
            <th className="py-2 px-4 border-b">Employee ID</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="py-2 px-4 border-b text-center">{appointment.id}</td>
              <td className="py-2 px-4 border-b text-center">{appointment.clientId}</td>
              <td className="py-2 px-4 border-b text-center">{appointment.employeeId}</td>
              <td className="py-2 px-4 border-b text-center">{appointment.date}</td>
              <td className="py-2 px-4 border-b text-center">{appointment.time}</td>
              <td className="py-2 px-4 border-b text-center">
                <button
                  onClick={() => handleUpdate(appointment)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(appointment.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={() => router.push('/dashboard/Appointment')}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Appointment
        </button>
      </div>
    </div>
  );
};

export default SchedulePage;



