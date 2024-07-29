package za.ac.cput.factory;

/*
Siyamthanda
Rolomana
222374012
 */

import za.ac.cput.domain.Client;
import za.ac.cput.domain.Payment;
import za.ac.cput.util.Helper;

import java.util.Date;

public class PaymentFactory {

    public static Payment createPayment(String paymentID, String bookingID, String userID,
                                        double amount, String paymentMethod, Date datePaid, Client client) {
        if (Helper.isNullOrEmpty(paymentID) ||
                Helper.isNullOrEmpty(bookingID) ||
                Helper.isNullOrEmpty(userID) ||
                amount <= 0 ||
                Helper.isNullOrEmpty(paymentMethod) ||
                datePaid == null ||
                client == null) {
            return null;
        }

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

    public static Payment createPayment(String paymentID, String bookingID, String userID,
                                        double amount, String paymentMethod, Date datePaid, String clientId, String firstName, String lastName) {
        if (Helper.isNullOrEmpty(paymentID) ||
                Helper.isNullOrEmpty(bookingID) ||
                Helper.isNullOrEmpty(userID) ||
                amount <= 0 ||
                Helper.isNullOrEmpty(paymentMethod) ||
                datePaid == null  || Helper.isNullOrEmpty(clientId) || Helper.isNullOrEmpty(firstName) || Helper.isNullOrEmpty(lastName))
            return null;


        Client client = new Client.Builder().setClientId(clientId)
                .setFirstName(firstName)
                .setLastName(lastName)
                .build();

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
