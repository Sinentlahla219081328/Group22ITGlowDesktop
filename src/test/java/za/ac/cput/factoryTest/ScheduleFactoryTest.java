package za.ac.cput.factoryTest;
import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ScheduleFactory;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.*;

class ScheduleFactoryTest {
  @Test
  void buildSchedule() {
    Date scheduleDate = Date.valueOf("2024-05-19");
    Time startTime = Time.valueOf(LocalTime.of(9, 0));
    Time endTime = Time.valueOf(LocalTime.of(17, 0));

    Schedule schedule = ScheduleFactory.buildSchedule("1", "EMP001", scheduleDate, startTime, endTime);

    assertNotNull(schedule);
    System.out.println(schedule);
  }

}
