package za.ac.cput.domain;

/*

 */

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Time;
import java.time.LocalTime;
import java.util.Date;
import java.util.Objects;

@Entity
public class Schedule {
@Id
private String scheduleId;

private String employeeId;
Date scheduleDate;
Time startTime;
Time endTime;

protected Schedule(){}

    public String getScheduleId() {
        return scheduleId;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public Date getScheduleDate() {
        return scheduleDate;
    }

    public Time getStartTime() {
        return startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Schedule schedule = (Schedule) o;
        return Objects.equals(scheduleId, schedule.scheduleId) && Objects.equals(employeeId, schedule.employeeId) && Objects.equals(scheduleDate, schedule.scheduleDate) && Objects.equals(startTime, schedule.startTime) && Objects.equals(endTime, schedule.endTime);
    }

    @Override
    public int hashCode() {
        return Objects.hash(scheduleId, employeeId, scheduleDate, startTime, endTime);
    }

    @Override
    public String toString() {
        return "Schedule{" +
                "scheduleId='" + scheduleId + '\'' +
                ", employeeId='" + employeeId + '\'' +
                ", scheduleDate=" + scheduleDate +
                ", startTime=" + startTime +
                ", endTime=" + endTime +
                '}';
    }
    public static class Builder{
        private String scheduleId;
        private String employeeId;
        private Date scheduleDate;
        private LocalTime startTime;
        private LocalTime endTime;

        public Builder setScheduleId(String scheduleId ) {
            this.scheduleId= scheduleId;
            return this;
        }

        public Builder setEmployeeId(String employeeId) {
            this.employeeId= employeeId;
            return this;
        }

        public Builder setScheduleDate(Date scheduleDate) {
            this.scheduleDate= scheduleDate;
            return this;
        }

        public Builder setStartTime(Time startTime) {
            this.startTime = startTime.toLocalTime();
            return this;
        }

        public Builder setEndTime(Time endTime) {
            this.endTime = endTime.toLocalTime();
            return this;
        }

        public Builder copy(Schedule schedule){
            this.employeeId = schedule.employeeId;
            this.scheduleId = schedule.scheduleId;
            this.scheduleDate = schedule.scheduleDate;
            this.startTime = schedule.startTime.toLocalTime();
            this.endTime = schedule.endTime.toLocalTime();
            return this;
        }
        public Schedule build(){
            return new Schedule();
        }
    }
}
