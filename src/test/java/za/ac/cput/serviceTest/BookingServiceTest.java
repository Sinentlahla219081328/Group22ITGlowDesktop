package za.ac.cput.serviceTest;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Booking;
import za.ac.cput.domain.Service;
import za.ac.cput.factory.BookingFactory;
import za.ac.cput.repository.BookingRepository;
import za.ac.cput.service.BookingService;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class BookingServiceTest {

    @Autowired
    private BookingService bookingService;

    @Autowired
    private BookingRepository bookingRepository;

    private Booking booking;

    @BeforeEach
    void setUp() {
        long serviceCode = 123456L;

        Service service = new Service.Builder()
                .setServiceCode(serviceCode)
                .setServiceName("Sample Service")
                .setMensServiceDescription("Men's Service Description")
                .setWomensServiceDescription("Women's Service Description")
                .setPrice(100.00)
                .build();

        booking = BookingFactory.createBooking(
                "user123",
                serviceCode,
                "provider789",
                LocalDate.now(),
                LocalTime.now()
        );
    }

    @Test
    public void testCreateBooking() {
        Booking createdBooking = bookingService.createBooking(booking);
        assertNotNull(createdBooking);
        assertEquals(booking.getUserID(), createdBooking.getUserID());
        assertEquals(booking.getServiceCode(), createdBooking.getServiceCode());
        assertEquals(booking.getProviderID(), createdBooking.getProviderID());
        assertEquals(booking.getDate(), createdBooking.getDate());
        assertEquals(booking.getTime(), createdBooking.getTime());
    }

    @Test
    public void testGetBookingById() {
        Booking savedBooking = bookingService.createBooking(booking);
        Booking retrievedBooking = bookingService.getBookingById(savedBooking.getBookingID()).orElse(null);
        assertNotNull(retrievedBooking);
        assertEquals(savedBooking.getBookingID(), retrievedBooking.getBookingID());
    }

    @Test
    public void testUpdateBooking() {
        Booking savedBooking = bookingService.createBooking(booking);
        savedBooking.setUserID("updatedUser");
        Booking updatedBooking = bookingService.updateBooking(savedBooking.getBookingID(), savedBooking);
        assertNotNull(updatedBooking);
        assertEquals("updatedUser", updatedBooking.getUserID());
    }

    @Test
    public void testDeleteBooking() {
        Booking savedBooking = bookingService.createBooking(booking);
        bookingService.deleteBooking(savedBooking.getBookingID());
        assertFalse(bookingService.getBookingById(savedBooking.getBookingID()).isPresent());
    }

    @Test
    public void testGetAllBookings() {
        bookingService.createBooking(booking);
        assertFalse(bookingService.getAllBookings().isEmpty());
    }
}
