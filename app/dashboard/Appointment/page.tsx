
'use client';

import { useRouter } from 'next/navigation';

const clients = [
  { id: 'C001', name: 'John Doe' },
  { id: 'C002', name: 'Jane Smith' },
  // Add more sample clients if necessary
];

const employees = [
  { id: 'E001', name: 'Alice Johnson' },
  { id: 'E002', name: 'Bob Brown' },
  // Add more sample employees if necessary
];

const NewAppointment = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement the save logic and connect to your database here
    router.push('/dashboard/Schedule');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Appointment</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700">Appointment ID</label>
          <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-4">
  <label className="block text-gray-700">Client ID</label>
  <select className="w-full p-2 border border-gray-300 rounded mt-1">
    <option value="" disabled selected>
      Select
    </option>
    {clients.map((client) => (
      <option key={client.id} value={client.id}>
        {client.id} - {client.name}
      </option>
    ))}
  </select>
</div>
<div className="mb-4">
  <label className="block text-gray-700">Employee ID</label>
  <select className="w-full p-2 border border-gray-300 rounded mt-1">
    <option value="" disabled selected>
      Select
    </option>
    {employees.map((employee) => (
      <option key={employee.id} value={employee.id}>
        {employee.id} - {employee.name}
      </option>
    ))}
  </select>
</div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input type="date" className="w-full p-2 border border-gray-300 rounded mt-1" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input type="time" className="w-full p-2 border border-gray-300 rounded mt-1" />
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
  );
};

export default NewAppointment;