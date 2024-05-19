package za.ac.cput.serviceTest;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Client;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ClientFactory;
import za.ac.cput.factory.ScheduleFactory;
import za.ac.cput.service.ClientService;
import za.ac.cput.service.ScheduleService;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ScheduleServiceTest {

    @Autowired
    ScheduleService service;

    Schedule schedule;
    @Test
    void a_setup() {
        schedule = ScheduleFactory.createSchedule("246810", "Sipho",
                23, 12, 14);
        assertNotNull(schedule);
        System.out.println(schedule);
    }

    @Test
    void b_create() {
        Schedule created = service.create(schedule);
        assertNotNull(created);
        System.out.println(created);
    }

    @Test
    void c_read() {
        Schedule read = service.read(schedule.getScheduleId());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void d_update() {
        Schedule newSchedule = new Client.Builder().copy(schedule)
                .setFirstName("")
                .build();
        Schedule updated = service.update(newSchedule);
        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    @Disabled
    void f_delete() {
    }

    @Test
    void e_getAll() {
        System.out.println(service.getAll());
    }
}