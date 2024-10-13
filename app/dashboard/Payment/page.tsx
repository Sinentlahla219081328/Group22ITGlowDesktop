'use client';

import React, { useState } from 'react';

export default function Payment() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    bookingId: '',
    userId: '',
  });

  const handlePayment = async (token: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/ITGlowDesktop/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          amount: paymentDetails.amount,
          bookingId: paymentDetails.bookingId,
          userId: paymentDetails.userId,
        }),
      });

      if (!response.ok) {
        throw new Error('Payment processing failed');
      }

      setSuccess(true);
      setPaymentDetails({ amount: 0, bookingId: '', userId: '' });
    } catch (err) {
      const errorMessage = (err as Error).message || 'An unexpected error occurred';
      setError(errorMessage);
    }
     finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const yoco = new (window as any).YocoSDK({
      publicKey: 'your_yoco_public_key', // Replace with your public key from Yoco dashboard
    });

    yoco.inline.createToken(
      {
        amountInCents: paymentDetails.amount * 100, // Convert amount to cents
        currency: 'ZAR',
      },
      async (result: any) => {
        if (result.error) {
          setError(result.error.message);
        } else {
          await handlePayment(result.id); // Token received from Yoco
        }
      }
    );
  };

  return (
    <main className="flex min-h-screen flex-col p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="bookingId"
          value={paymentDetails.bookingId}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, bookingId: e.target.value })}
          placeholder="Booking ID"
          required
        />
        <input
          type="text"
          name="userId"
          value={paymentDetails.userId}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, userId: e.target.value })}
          placeholder="User ID"
          required
        />
        <input
          type="number"
          name="amount"
          value={paymentDetails.amount}
          onChange={(e) => setPaymentDetails({ ...paymentDetails, amount: parseFloat(e.target.value) })}
          placeholder="Amount (ZAR)"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 px-6 rounded-lg"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </form>

      {error && <div className="text-red-600">{error}</div>}
      {success && <div className="text-green-600">Payment Successful!</div>}
    </main>
  );
}
