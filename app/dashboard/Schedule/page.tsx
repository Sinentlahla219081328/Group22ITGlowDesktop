'use client';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';

interface Schedule {
  scheduleId: string;
  employeeId: string;
  scheduleDate: string;
  startTime: string;
  endTime: string;
}

const SchedulePage: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const router = useRouter();

  // Fetch schedules from the API
  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/schedule/getall');
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };
    fetchSchedules();
  }, []);

  // Handle delete schedule
  const handleDelete = async (scheduleId: string) => {
    try {
      await axios.delete(`/api/schedule/delete/${scheduleId}`);
      setSchedules(schedules.filter(schedule => schedule.scheduleId !== scheduleId));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  // Redirect to the create schedule form
  const handleCreate = () => {
    router.push('/dashboard/New-Schedule');
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">  
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Schedules</h1>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 border">Schedule ID</th>
              <th className="py-2 border">Employee ID</th>
              <th className="py-2 border">Date</th>
              <th className="py-2 border">Start Time</th>
              <th className="py-2 border">End Time</th>
              <th className="py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map(schedule => (
              <tr key={schedule.scheduleId}>
                <td className="py-2 border">{schedule.scheduleId}</td>
                <td className="py-2 border">{schedule.employeeId}</td>
                <td className="py-2 border">{schedule.scheduleDate}</td>
                <td className="py-2 border">{schedule.startTime}</td>
                <td className="py-2 border">{schedule.endTime}</td>
                <td className="py-2 border">
                  <button
                    onClick={() => router.push(`/dashboard/Update-Schedule/${schedule.scheduleId}`)}
                    className="bg-blue-500 text-white py-1 px-2 rounded mr-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(schedule.scheduleId)}
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
          Create Schedule
        </button>
      </div>
    </main>
  );
};

export default SchedulePage;
