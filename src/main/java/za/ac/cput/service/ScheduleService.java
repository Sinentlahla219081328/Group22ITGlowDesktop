package za.ac.cput.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.domain.Schedule;
import za.ac.cput.repository.ScheduleRepository;

import java.util.List;
@Service
public class ScheduleService implements IScheduleService {

    @Autowired
    private ScheduleRepository repository;

    public ScheduleService (ScheduleRepository repository) {
        this.repository = repository;
    }
    @Override
    public Schedule create(Schedule schedule) {
        return repository.save(schedule);
    }

    @Override
    public Schedule read(String id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Schedule update(Schedule schedule) {
        return repository.save(schedule);
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }

    @Override
    public List<Schedule> getAll() {
        return repository.findAll();
    }

}
