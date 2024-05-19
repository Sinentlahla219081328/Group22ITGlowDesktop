package za.ac.cput.factory;

/*

 */

import za.ac.cput.domain.Schedule;


import java.sql.Time;
import java.util.Date;

public class ScheduleFactory {

    public static Schedule createSchedule(String employeeId, String scheduleId,
                                          Date scheduleDate, Time startTime, Time endtime){
        return new Schedule.Builder()
                .setEmployeeId(employeeId)
                .setScheduleId(scheduleId)
                .setScheduleDate(scheduleDate)
                .setStartTime(startTime)
                .setEndTime(endtime)
                .build();
    }



}
