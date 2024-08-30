"use client";

import { useState } from 'react';

interface Sale {
  saleId: string;
  employeeId: string;
  saleDescription: string;
}

export default function Sales() {
  const [saleDetails, setSaleDetails] = useState<Sale>({
    saleId: '',
    employeeId: '',
    saleDescription: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSaleDetails(prevSale => ({
      ...prevSale,
      [name]: value,
    }));
  };

  const handleSale = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // API call to create sale
      const response = await fetch('http://localhost:8080/api/sales/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to record sale');
      }

      setSuccess(true);
      setSaleDetails({
        saleId: '',
        employeeId: '',
        saleDescription: '',
      });
    } catch (err) {
      const errorMessage = (err as Error).message || 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col p-6 bg-[url('/salon.jpg')] bg-cover bg-center">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-pink-500 p-4 md:h-52">
        <div className="flex justify-between w-full">
          {/* Buttons aligned to the right */}
          <div className="flex space-x-4">
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">Record Sale</button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">View Sales</button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-start rounded-lg ml-20 mt-20 bg-pink-100 w-1/2'>
        <form className='w-full' onSubmit={handleSale}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="saleId">
              Sale ID
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="saleId"
                value={saleDetails.saleId}
                onChange={handleInputChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="employeeId">
              Employee ID
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="employeeId"
                value={saleDetails.employeeId}
                onChange={handleInputChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="saleDescription">
              Sale Description
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="saleDescription"
                value={saleDetails.saleDescription}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-pink-500 text-black-600 font-bold py-4 px-4 rounded"
              disabled={loading}
            >
              {loading ? 'Recording...' : 'Record Sale'}
            </button>
          </div>
        </form>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">Sale recorded successfully!</p>}
    </main>
  );
}
