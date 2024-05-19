package za.ac.cput.service;

import za.ac.cput.domain.Schedule;

import java.util.List;

public interface IScheduleService extends IService<Schedule, String> {

    List<Schedule> getAll();

}
