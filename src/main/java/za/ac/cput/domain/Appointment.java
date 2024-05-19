package za.ac.cput.domain;

/*
Sinentlahla Pindani 219081328
18 may 2024
 */


import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Time;
import java.util.Date;
import java.util.Objects;
@Entity
public class Appointment {
    @Id
    private String appointmentID;
    private String clientId;
    private String employeeID;
    private Date date;
    private Time time;


    protected Appointment() {}

    private Appointment(Builder builder) {
        this.appointmentID = builder.appointmentID;
        this.clientId = builder.clientId;
        this.employeeID = builder.employeeID;
        this.date = builder.date;
        this.time = builder.time;
    }

    // Getters
    public String getAppointmentID() {
        return appointmentID;
    }

    public String getClientId() {
        return clientId;
    }

    public String getEmployeeID() {
        return employeeID;
    }

    public Date getDate() {
        return date;
    }

    public Date getTime() {
        return time;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Appointment that = (Appointment) o;
        return Objects.equals(appointmentID, that.appointmentID) && Objects.equals(clientId, that.clientId) && Objects.equals(employeeID, that.employeeID) && Objects.equals(date, that.date) && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(appointmentID, clientId, employeeID, date, time);
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "appointmentID='" + appointmentID + '\'' +
                ", clientID='" + clientId + '\'' +
                ", employeeID='" + employeeID + '\'' +
                ", date=" + date +
                ", time=" + time +
                '}';
    }


    public static class Builder {
        private String appointmentID;
        private String clientId;
        private String employeeID;
        private Date date;
        private Time time;

        public Builder setAppointmentID(String appointmentID) {
            this.appointmentID = appointmentID;
            return this;
        }

        public Builder setClientId(String clientId) {
            this.clientId = clientId;
            return this;
        }

        public Builder setEmployeeID(String employeeID) {
            this.employeeID = employeeID;
            return this;
        }

        public Builder setDate(Date date) {
            this.date = date;
            return this;
        }

        public Builder setTime(Time time) {
            this.time = time;
            return this;
        }

        // Copy method
        public Builder copy(Appointment appointment) {

                    this.appointmentID = appointment.appointmentID;
                    this.clientId = appointment.clientId;
                    this.employeeID = appointment.employeeID;
                    this.date = appointment.date;
                    this.time = appointment.time;
                    return this;
        }

        public Appointment build() {
            return new Appointment(this);
        }

    }
    }






