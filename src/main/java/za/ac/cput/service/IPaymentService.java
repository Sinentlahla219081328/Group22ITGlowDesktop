package za.ac.cput.service;

import za.ac.cput.domain.Payment;

import java.util.List;

public interface IPaymentService {
    Payment createPayment(Payment payment);
    Payment getPaymentById(String paymentId);
    List<Payment> getAllPayments();
    void deletePayment(String paymentId);
}
