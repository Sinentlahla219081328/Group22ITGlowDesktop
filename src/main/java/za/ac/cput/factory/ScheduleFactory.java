package za.ac.cput.factory;

/*

 */
import za.ac.cput.domain.Schedule;
import za.ac.cput.util.Helper;

import java.time.LocalDate;
import java.time.LocalTime;

public class ScheduleFactory {

    public static Schedule buildSchedule(String scheduleId, String employeeId, LocalDate scheduleDate, LocalTime startTime, LocalTime endTime) {

        if (Helper.isNullOrEmpty(scheduleId) || Helper.isNullOrEmpty(employeeId) ||
                scheduleDate == null || startTime == null || endTime == null) {
            return null;
        }

        return new Schedule.Builder()
                .setScheduleId(scheduleId)
                .setEmployeeId(employeeId)
                .setScheduleDate(scheduleDate)
                .setStartTime(startTime)
                .setEndTime(endTime)
                .build();

    }
}
