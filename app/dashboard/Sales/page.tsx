'use client';

import { useState } from 'react';

interface Sale {
  saleId: string;
  employeeId: string;
  saleDescription: string;
}

export default function Sales() {
  const [sale, setSale] = useState<Sale>({
    saleId: '',
    employeeId: '',
    saleDescription: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSale(prevSale => ({
      ...prevSale,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
  
    try {
      const response = await fetch('/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sale),
      });
  
      if (!response.ok) {
        throw new Error('Failed to record sale');
      }
  
      setSuccess(true);
      // Reset form after successful submission
      setSale({ saleId: '', employeeId: '', saleDescription: '' });
    } catch (err) {
      const errorMessage = (err as Error).message || 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Record Sale</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Sale ID</label>
          <input
            type="text"
            name="saleId"
            value={sale.saleId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Employee ID</label>
          <input
            type="text"
            name="employeeId"
            value={sale.employeeId}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Sale Description</label>
          <textarea
            name="saleDescription"
            value={sale.saleDescription}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">Sale recorded successfully!</p>}
        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
          disabled={loading}
        >
          {loading ? 'Recording Sale...' : 'Submit Sale'}
        </button>
      </form>
    </div>
  );
}
