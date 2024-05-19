package za.ac.cput.factory;

/*
Siyamthanda
Rolomana
222374012
 */

import za.ac.cput.domain.Payment;
import za.ac.cput.domain.Client;

import java.util.Date;

public class PaymentFactory {

    public static Payment createPayment(String paymentID, String bookingID, String userID,
                                        double amount, String paymentMethod, Date datePaid, Client client) {
        return new Payment.Builder()
                .setPaymentID(paymentID)
                .setBookingID(bookingID)
                .setUserID(userID)
                .setAmount(amount)
                .setPaymentMethod(paymentMethod)
                .setDatePaid(datePaid)
                .setClient(client)
                .build();
    }
}