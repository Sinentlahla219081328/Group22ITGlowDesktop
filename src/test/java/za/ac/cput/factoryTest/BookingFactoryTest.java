package za.ac.cput.factoryTest;

/*
FactoryTest class BookingFactoryTest
Author: Siyamthanda Rolomana
Date: 18 May 2024
 */

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Booking;
import za.ac.cput.factory.BookingFactory;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class BookingFactoryTest {

    @Test
    public void testCreateBooking() {
        long serviceCode = 123456L;

        Booking booking = BookingFactory.createBooking(
                "user123",
                serviceCode,
                "provider789",
                LocalDate.now(),
                LocalTime.now()
        );

        assertNotNull(booking);
    }
}
