package za.ac.cput.serviceTest;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ScheduleFactory;
import za.ac.cput.service.ScheduleService;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class ScheduleServiceTest {


    @Autowired
    private ScheduleService scheduleService;

    private static Schedule schedule;

    @BeforeEach
    void setUp() {
        Date scheduleDate = Date.valueOf("2024-05-19");
        Time startTime = Time.valueOf(LocalTime.of(9, 0));
        Time endTime = Time.valueOf(LocalTime.of(17, 0));

        schedule = ScheduleFactory.buildSchedule("1", "EMP001", scheduleDate, startTime, endTime);
    }

    @Test
    void create() {
        Schedule createdSchedule = scheduleService.create(schedule);
        assertNotNull(createdSchedule);
        System.out.println("Created Schedule: " + createdSchedule);
    }

    @Test
    void read() {
        Schedule readSchedule = scheduleService.read(schedule.getScheduleId());
        assertNotNull(readSchedule);
        System.out.println(readSchedule);
    }

    @Test
    void update() {
        Schedule updatedSchedule = new Schedule.Builder().copy(schedule).setEmployeeId("EMP002").build();
        Schedule newSchedule = scheduleService.update(updatedSchedule);
        assertNotNull(newSchedule);
        System.out.println(newSchedule);
    }


    @Test
    void getAll() {
        System.out.println(scheduleService.getAll());
    }


}