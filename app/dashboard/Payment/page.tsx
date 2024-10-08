"use client";

import { useState } from 'react';

interface PaymentDetails {
  paymentId: string;
  bookingId: string;
  userId: string;
  amount: number;
  paymentMethod: string;
  datePaid: string;
}

export default function Payment() {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    paymentId: '',
    bookingId: '',
    userId: '',
    amount: 0,
    paymentMethod: '',
    datePaid: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    
    try {

      const response = await fetch('http://localhost:8080/ITGlowDesktop/payments', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to process payment');
      }

      setSuccess(true);
      setPaymentDetails({
        paymentId: '',
        bookingId: '',
        userId: '',
        amount: 0,
        paymentMethod: '',
        datePaid: '',
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
          <div className="flex space-x-4">
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">Make Payment</button>
            <button className="bg-pink-100 text-black-600 py-2 px-4 rounded">View Receipts</button>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-start rounded-lg ml-20 mt-20 bg-pink-100 w-1/2'>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="bookingId">
              Booking ID
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="bookingId"
                value={paymentDetails.bookingId}
                onChange={handleChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="userId">
              User ID
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="userId"
                value={paymentDetails.userId}
                onChange={handleChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="amount">
              Amount (ZAR)
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="number"
                name="amount"
                value={paymentDetails.amount}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: parseFloat(e.target.value) })}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="paymentMethod">
              Payment Method
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="text"
                name="paymentMethod"
                value={paymentDetails.paymentMethod}
                onChange={handleChange}
                required
              />
            </div>

            <label className="mb-3 mt-5 block text-3xl font-large text-gray-900" htmlFor="datePaid">
              Date Paid
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[48px] px-10 text-2xl outline-2 placeholder:text-gray-500"
                type="date"
                name="datePaid"
                value={paymentDetails.datePaid}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-pink-500 text-black-600 font-bold py-4 px-4 rounded"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Process Payment'}
            </button>
          </div>
        </form>
      </div>

      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">Payment was successful!</div>}
    </main>
  );
}