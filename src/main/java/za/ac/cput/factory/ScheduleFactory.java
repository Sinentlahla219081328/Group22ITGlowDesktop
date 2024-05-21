package za.ac.cput.factory;

/*

 */

import za.ac.cput.domain.Schedule;


import java.sql.Time;
import java.util.Date;

public class ScheduleFactory {


   public static Schedule buildSchedule(String scheduleId, String employeeId, Date scheduleDate, Time startTime, Time endTime) {
        return new Schedule.Builder()
                .setScheduleId(scheduleId)
                .setEmployeeId(employeeId)
                .setScheduleDate(scheduleDate)
                .setStartTime(startTime)
                .setEndTime(endTime)
                .build();
    }



}
