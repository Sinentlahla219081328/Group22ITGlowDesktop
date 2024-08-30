'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Appointment {
  id: number;
  clientId: string;
  employeeId: string;
  date: string;
  time: string;
}

const SchedulePage = () => {
  const router = useRouter();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch appointments from the API
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/appointments');
        if (!response.ok) {
          throw new Error('Failed to fetch appointments');
        }
        const data: Appointment[] = await response.json();
        setAppointments(data);
      } catch (err) {
        const errorMessage = (err as Error).message || 'An unexpected error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // Delete an appointment using API
  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/appointments/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete appointment');
      }

      setAppointments(appointments.filter((appointment) => appointment.id !== id));
    } catch (err) {
      const errorMessage = (err as Error).message || 'An unexpected error occurred';
      setError(errorMessage);
    }
  };

  // Update an appointment (redirect to update form)
  const handleUpdate = (appointment: Appointment) => {
    router.push(`/dashboard/Appointment/update/${appointment.id}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <div className="flex justify-between w-full">
          <div className="flex space-x-4">
            <button
              onClick={() => router.push('/dashboard/Appointment')}
              className="bg-pink-100 text-black-600 py-2 px-4 rounded"
            >
              Create New Appointment
            </button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">View Schedule</button>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-10 bg-pink-100 rounded-lg shadow-lg overflow-x-auto">
        <div className="py-4 px-6">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">Scheduled Appointments</h1>
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="py-4 px-4 border-b text-left">Appointment ID</th>
                <th className="py-4 px-4 border-b text-left">Client ID</th>
                <th className="py-4 px-4 border-b text-left">Employee ID</th>
                <th className="py-4 px-4 border-b text-left">Date</th>
                <th className="py-4 px-4 border-b text-left">Time</th>
                <th className="py-4 px-4 border-b text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="py-4 px-4 border-b text-center">{appointment.id}</td>
                  <td className="py-4 px-4 border-b text-center">{appointment.clientId}</td>
                  <td className="py-4 px-4 border-b text-center">{appointment.employeeId}</td>
                  <td className="py-4 px-4 border-b text-center">{appointment.date}</td>
                  <td className="py-4 px-4 border-b text-center">{appointment.time}</td>
                  <td className="py-4 px-4 border-b text-center">
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
        </div>
      </div>
    </main>
  );
};

export default SchedulePage;
