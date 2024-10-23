package za.ac.cput.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingID;
    private String userID;
    private long serviceCode;
    private String providerID;
    private LocalDate date;
    private LocalTime time;

    public Booking() {
    }

    public Booking(Long bookingID, String userID, long serviceCode, String providerID, LocalDate date, LocalTime time) {
        this.bookingID = bookingID;
        this.userID = userID;
        this.serviceCode = serviceCode;
        this.providerID = providerID;
        this.date = date;
        this.time = time;
    }

    public Long getBookingID() {
        return bookingID;
    }

    public void setBookingID(Long bookingID) {
        this.bookingID = bookingID;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public long getServiceCode() {
        return serviceCode;  // Updated to long
    }

    public void setServiceCode(long serviceCode) {
        this.serviceCode = serviceCode;
    }

    public String getProviderID() {
        return providerID;
    }

    public void setProviderID(String providerID) {
        this.providerID = providerID;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }
}
