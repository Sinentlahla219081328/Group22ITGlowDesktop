'use client';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface Appointment {
  appointmentID: string;
  clientId: string;
  employeeID: string;
  date: string;
  time: string;
}

const AppointmentPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  // Fetch appointments from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('/api/appointment/getAll');
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, []);

  // Handle delete appointment
  const handleDelete = async (appointmentID: string) => {
    try {
      await axios.delete(`/api/appointment/delete/${appointmentID}`);
      setAppointments(appointments.filter(appointment => appointment.appointmentID !== appointmentID));
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };

  // Redirect to the create appointment form
  const handleCreate = () => {
    router.push('/dashboard/New-Appointment');
  };

  return (

    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">  
   </div>
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 border">Appointment ID</th>
            <th className="py-2 border">Client ID</th>
            <th className="py-2 border">Employee ID</th>
            <th className="py-2 border">Date</th>
            <th className="py-2 border">Time</th>
            <th className="py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.appointmentID}>
              <td className="py-2 border">{appointment.appointmentID}</td>
              <td className="py-2 border">{appointment.clientId}</td>
              <td className="py-2 border">{appointment.employeeID}</td>
              <td className="py-2 border">{appointment.date}</td>
              <td className="py-2 border">{appointment.time}</td>
              <td className="py-2 border">
                <button
                  onClick={() => router.push(`/dashboard/Update-App/${appointment.appointmentID}`)}
                  className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(appointment.appointmentID)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white py-2 px-4 rounded mt-4"
      >
        Create Appointment
      </button>
    </div>
    </main>
  );
};

export default AppointmentPage;




