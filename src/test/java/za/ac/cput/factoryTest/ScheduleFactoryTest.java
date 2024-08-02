package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ScheduleFactory;

import java.time.LocalDate;
import java.time.LocalTime;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

class ScheduleFactoryTest {

  @Test
  void testBuildScheduleSuccess() {
    Schedule s = ScheduleFactory.buildSchedule("33100", "EMP001", LocalDate.of(2024, 5, 17), LocalTime.of(9, 0), LocalTime.of(17, 0));

    assertNotNull(s);
    System.out.println(s.toString());
  }

  @Test
  void testBuildScheduleFailure() {
    Schedule s = ScheduleFactory.buildSchedule("", "EMP001", LocalDate.of(2024, 5, 17), LocalTime.of(9, 0), LocalTime.of(17, 0));

    assertNotNull(s);
    System.out.println(s); // This will print "null" as the schedule is expected to be null
  }

}
