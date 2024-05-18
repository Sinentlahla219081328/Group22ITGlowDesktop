package za.ac.cput.factory;

/*

 */

import za.ac.cput.domain.Appointment;

import za.ac.cput.util.Helper;

import java.sql.Time;
import java.util.Date;

public class AppointmentFactory {
    public static Appointment createAppointment(String appointmentID, String clientId, String employeeID, Date date, Time time ){
        if (Helper.isNullOrEmpty(appointmentID)
                || Helper.isNullOrEmpty(clientId)
                ||Helper.isNullOrEmpty(employeeID))

            return null;

        return new Appointment.Builder().setAppointmentID(appointmentID)
                .setClientID(clientId)
                .setEmployeeID(employeeID)
                .setDate(date)
                .setTime(time)
                .build();
    }

}
