
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import CSS for the calendar

const Schedule = () => {

  type Appointment = {
    appointmentID: string;
    clientId: string;
    employeeID: string;
    date: string; 
    time: string;
  };
  // Define state types
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  // Fetch appointments from the API
  useEffect(() => {
    axios.get('http://localhost:8080/ITGlow/appointment')
      .then((response) => {
        setAppointments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching appointments:', error);
      });
  }, []);

  // Find appointments for the selected date
  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter((appt) => {
      const apptDate = new Date(appt.date);
      return apptDate.toDateString() === date.toDateString();
    });
  };

  // Handle appointment confirmation
  const handleConfirm = (appointmentID: string) => {
    axios.put(`http://localhost:8080/ITGlow/appointment/confirm/${appointmentID}`)
      .then(() => {
        alert('Appointment confirmed!');
        // Optionally refresh appointments after confirmation
        axios.get('http://localhost:8080/ITGlow/appointment')
          .then((response) => setAppointments(response.data));
      })
      .catch((error) => console.error('Error confirming appointment:', error));
  };

  // When a date is clicked, find the corresponding appointments
  const handleDateClick = (date: Date) => {
    const appts = getAppointmentsForDate(date);
    if (appts.length > 0) {
      setSelectedAppointment(appts[0]); // Assuming one appointment per day for simplicity
      setSelectedDate(date);
    } else {
      setSelectedAppointment(null);
    }
  };

  return (
    <div>
      <h1>Schedule</h1>
      <Calendar
        onClickDay={handleDateClick}
      />
      {selectedAppointment && (
        <div>
          <h2>Appointment Details</h2>
          <p>Client ID: {selectedAppointment.clientId}</p>
          <p>Employee ID: {selectedAppointment.employeeID}</p>
          <p>Date: {new Date(selectedAppointment.date).toLocaleDateString()}</p>
          <p>Time: {selectedAppointment.time}</p>
          <button onClick={() => handleConfirm(selectedAppointment.appointmentID)}>
            Confirm Appointment
          </button>
        </div>
      )}
      {selectedDate && !selectedAppointment && (
        <p>No appointments for {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default Schedule;
