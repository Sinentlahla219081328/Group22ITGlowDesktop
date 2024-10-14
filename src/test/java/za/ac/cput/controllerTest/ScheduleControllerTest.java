package za.ac.cput.controllerTest;
/*OkuhleVellem*/

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import za.ac.cput.domain.Schedule;
import za.ac.cput.factory.ScheduleFactory;

import java.sql.Time;
import java.time.LocalDate;
import java.time.LocalTime;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.MethodName.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ScheduleControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    private final String BASE_URL = "http://localhost:8080/ITGlow/schedule";

    private static Schedule schedule;

    @BeforeAll
    public static void setUp() {
        schedule = ScheduleFactory.buildSchedule("77210", "EMP001", LocalDate.of(2024, 7, 7), LocalTime.of(9, 0), LocalTime.of(17, 0));
    }

    @Test
    void a_create() {
        String URL = BASE_URL + "/create";
        ResponseEntity<Schedule> postResponse = restTemplate.postForEntity(URL, schedule, Schedule.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Schedule scheduleSaved = postResponse.getBody();
        assertEquals(schedule.getScheduleId(), scheduleSaved.getScheduleId());
        System.out.println("Created Schedule: " + scheduleSaved);
    }

    @Test
    void b_read() {
        String URL = BASE_URL + "/read/" + schedule.getScheduleId();
        System.out.println("URL: " + URL);
        ResponseEntity<Schedule> response = restTemplate.getForEntity(URL, Schedule.class);
        assertNotNull(response.getBody());
        System.out.println("Read Schedule: " + response.getBody());
        assertEquals(schedule.getScheduleId(), response.getBody().getScheduleId());
    }

    @Test
    void c_update() {
        String URL = BASE_URL + "/update";
        Schedule newSchedule = new Schedule.Builder().copy(schedule)
                .setStartTime(LocalTime.of(8, 0))
                .build();
        ResponseEntity<Schedule> postResponse = restTemplate.postForEntity(URL, newSchedule, Schedule.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Schedule scheduleUpdated = postResponse.getBody();
        System.out.println("Updated Schedule: " + scheduleUpdated);
        assertEquals(newSchedule.getScheduleId(), scheduleUpdated.getScheduleId());
    }

    @Disabled
    @Test
    void d_delete() {
        String URL = BASE_URL + "/delete/" + schedule.getScheduleId();
        System.out.println("URL: " + URL);
        restTemplate.delete(URL);
        System.out.println("Success: Deleted Schedule");
    }

    @Test
    void e_getAll() {
        String URL = BASE_URL + "/getAll";
        ResponseEntity<String> response = restTemplate.getForEntity(URL, String.class);
        System.out.println("Show All: ");
        System.out.println(response);
        System.out.println(response.getBody());
    }
}