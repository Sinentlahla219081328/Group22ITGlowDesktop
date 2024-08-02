package za.ac.cput.serviceTest;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ScheduleFactory;
import za.ac.cput.service.ScheduleService;
import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class ScheduleServiceTest {

    @Autowired
    private ScheduleService scheduleService;

    private static Schedule schedule1;
    private static Schedule schedule2;

    String dateStr1 = "2024-07-07";
    LocalDate date1 = LocalDate.parse(dateStr1);

    String dateStr2 = "2024-07-08";
    LocalDate date2 = LocalDate.parse(dateStr2);

    @Test
    void a_setup() {
        schedule1 = ScheduleFactory.buildSchedule("83557", "EMP001", date1, LocalTime.of(9, 0), LocalTime.of(17, 0));
        assertNotNull(schedule1);
        System.out.println(schedule1);

        schedule2 = ScheduleFactory.buildSchedule("42210", "EMP002", date2, LocalTime.of(10, 0), LocalTime.of(18, 0));
        assertNotNull(schedule2);
        System.out.println(schedule2);
    }

    @Test
    void b_create() {
        Schedule created1 = scheduleService.create(schedule1);
        assertNotNull(created1);
        System.out.println(created1);

        Schedule created2 = scheduleService.create(schedule2);
        assertNotNull(created2);
        System.out.println(created2);
    }

    @Test
    void c_read() {
        Schedule read = scheduleService.read(schedule1.getScheduleId());
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void d_update() {
        Schedule newSchedule = new Schedule.Builder().copy(schedule1)
                .setStartTime(LocalTime.of(8, 0))
                .setEndTime(LocalTime.of(16, 0))
                .build();
        Schedule updated = scheduleService.update(newSchedule);
        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    void e_getAll() {
        System.out.println(scheduleService.getAll());
    }
}