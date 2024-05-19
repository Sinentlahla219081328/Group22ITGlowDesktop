package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Appointment;
import za.ac.cput.factory.AppointmentFactory;

import java.sql.Time;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class AppointmentFactoryTest {

        @Test
        public void testCreateAppointment(){

            Date date = new Date();
            Time time = new Time(10,30,0);

            Appointment appointment = AppointmentFactory.createAppointment("A123","C123","E123",date,time);
            assertNotNull(appointment);
            System.out.println(appointment.toString());
        }
}