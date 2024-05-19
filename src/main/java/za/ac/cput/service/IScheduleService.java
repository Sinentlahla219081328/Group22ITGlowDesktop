package za.ac.cput.service;

import za.ac.cput.domain.Schedule;

import java.util.Set;

public interface IScheduleService extends IService<Schedule, String> {
    Set<Schedule> getAll();
}
