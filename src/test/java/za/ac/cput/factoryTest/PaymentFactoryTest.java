package za.ac.cput.factoryTest;


import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Client;
import za.ac.cput.domain.Payment;
import za.ac.cput.factory.PaymentFactory;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Date;

class PaymentFactoryTest {

    @Test
void createPayment() {
        String paymentID = "123";
        String bookingID = "456";
        String userID = "789";
        double amount = 1000.00;
        String paymentMethod = "Credit Card";
        Date datePaid = new Date();
        Client client = new Client.Builder()
                .setClientId("001")
                .setFirstName("John")
                .setLastName("Doe")
                .build();

        Payment payment = PaymentFactory.createPayment(paymentID, bookingID, userID, amount, paymentMethod, datePaid, client);

        assertNotNull(payment);
        assertEquals(paymentID, payment.getPaymentID());
        assertEquals(bookingID, payment.getBookingID());
        assertEquals(userID, payment.getUserID());
        assertEquals(amount, payment.getAmount());
        assertEquals(paymentMethod, payment.getPaymentMethod());
        assertEquals(datePaid, payment.getDatePaid());
        assertEquals(client, payment.getClient());
    }
}