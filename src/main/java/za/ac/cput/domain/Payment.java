package za.ac.cput.domain;

/*
Siyamthanda
 Rolomana
 222374012
 */

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


import java.util.Objects;
import java.util.Date;

@Entity
public class Payment {
    @Id
    private String paymentID;
    private String bookingID;
    private String userID;
    private double amount;
    private String paymentMethod;
    private Date datePaid;


    @ManyToOne
    private Client client;

    public Payment() {
    }

    private Payment(Builder builder) {
        this.paymentID = builder.paymentID;
        this.bookingID = builder.bookingID;
        this.userID = builder.userID;
        this.amount = builder.amount;
        this.paymentMethod = builder.paymentMethod;
        this.datePaid = builder.datePaid;
        this.client = builder.client;
    }

    public String getPaymentID() {
        return paymentID;
    }

    public String getBookingID() {
        return bookingID;
    }

    public String getUserID() {
        return userID;
    }

    public double getAmount() {
        return amount;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public Date getDatePaid() {
        return datePaid;
    }

    public Client getClient() {
        return client;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Payment payment = (Payment) o;
        return Double.compare(payment.amount, amount) == 0 &&
                Objects.equals(paymentID, payment.paymentID) &&
                Objects.equals(bookingID, payment.bookingID) &&
                Objects.equals(userID, payment.userID) &&
                Objects.equals(paymentMethod, payment.paymentMethod) &&
                Objects.equals(datePaid, payment.datePaid) &&
                Objects.equals(client, payment.client);
    }

    @Override
    public int hashCode() {
        return Objects.hash(paymentID, bookingID, userID, amount, paymentMethod, datePaid, client);
    }

    @Override
    public String toString() {
        return "Payment{" +
                "paymentID='" + paymentID + '\'' +
                ", bookingID='" + bookingID + '\'' +
                ", userID='" + userID + '\'' +
                ", amount=" + amount +
                ", paymentMethod='" + paymentMethod + '\'' +
                ", datePaid=" + datePaid +
                ", client=" + client +
                '}';
    }

    public static class Builder {
        private String paymentID;
        private String bookingID;
        private String userID;
        private double amount;
        private String paymentMethod;
        private Date datePaid;
        private Client client;

        public Builder setPaymentID(String paymentID) {
            this.paymentID = paymentID;
            return this;
        }

        public Builder setBookingID(String bookingID) {
            this.bookingID = bookingID;
            return this;
        }

        public Builder setUserID(String userID) {
            this.userID = userID;
            return this;
        }

        public Builder setAmount(double amount) {
            this.amount = amount;
            return this;
        }

        public Builder setPaymentMethod(String paymentMethod) {
            this.paymentMethod = paymentMethod;
            return this;
        }

        public Builder setDatePaid(Date datePaid) {
            this.datePaid = datePaid;
            return this;
        }

        public Builder setClient(Client client) {
            this.client = client;
            return this;
        }

        public Builder copy(Payment payment) {
            this.paymentID = payment.paymentID;
            this.bookingID = payment.bookingID;
            this.userID = payment.userID;
            this.amount = payment.amount;
            this.paymentMethod = payment.paymentMethod;
            this.datePaid = payment.datePaid;
            this.client = payment.client;
            return this;
        }

        public Payment build() {
            return new Payment(this);
        }
    }
}