package za.ac.cput.service;

import za.ac.cput.domain.Appointment;


import java.util.List;

public interface IAppointmentService  extends IService<Appointment, String>{
    List<Appointment> getAll();
}
