package za.ac.cput.serviceTest;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Appointment;
import za.ac.cput.factory.AppointmentFactory;
import za.ac.cput.service.AppointmentService;


import java.sql.Time;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class AppointmentServiceTest {
    @Autowired
    private AppointmentService appointmentService;

    private static Appointment appointment;
    Date date = new Date();
    Time time = new Time(12,30,0);

    @Test
    void a_setup() {
        appointment = AppointmentFactory.createAppointment("A234","C234","E234",date ,time) ;
        assertNotNull(appointment);
        System.out.println(appointment);

    }

    @Test
    void b_create() {
        Appointment created  = appointmentService.create(appointment);
        assertNotNull(created);
        System.out.println(created);

    }

    @Test
    void c_read() {

        Appointment read = appointmentService.read(appointment.getAppointmentID());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void d_update() {
        Appointment newAppointment = new Appointment.Builder().copy(appointment).setClientId("C345")
                .build();
        Appointment updated= appointmentService.update(newAppointment);
        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    @Disabled
    void delete() {
    }

    @Test
    void e_getAll() {
        System.out.println(appointmentService.getAll());
    }


}