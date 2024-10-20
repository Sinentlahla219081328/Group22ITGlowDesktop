package za.ac.cput.factory;

import za.ac.cput.domain.Booking;

import java.time.LocalDate;
import java.time.LocalTime;

public class BookingFactory {
    public static Booking createBooking(String userID, long serviceCode, String providerID, LocalDate date, LocalTime time) {
        Booking booking = new Booking();
        booking.setUserID(userID);
        booking.setServiceCode(serviceCode);
        booking.setProviderID(providerID);
        booking.setDate(date);
        booking.setTime(time);
        return booking;
    }
}
