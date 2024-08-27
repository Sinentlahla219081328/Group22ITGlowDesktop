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
  const [payment, setPayment] = useState<PaymentDetails>({
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
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
      });

      if (!response.ok) {
        throw new Error('Failed to process payment');
      }

      // Payment was successful
      setSuccess(true);
      // Reset form after successful submission
      setPayment({
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
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Payment ID:
          <input
            type="text"
            name="paymentId"
            value={payment.paymentId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Booking ID:
          <input
            type="text"
            name="bookingId"
            value={payment.bookingId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          User ID:
          <input
            type="text"
            name="userId"
            value={payment.userId}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount (ZAR):
          <input
            type="number"
            name="amount"
            value={payment.amount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Payment Method:
          <input
            type="text"
            name="paymentMethod"
            value={payment.paymentMethod}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date Paid:
          <input
            type="date"
            name="datePaid"
            value={payment.datePaid}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>

      {success && <p>Payment processed successfully!</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
}
