package za.ac.cput.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.domain.Schedule;
import za.ac.cput.repository.ScheduleRepository;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ScheduleService implements IScheduleService{

    private ScheduleRepository repository;

    @Autowired
    ScheduleService (ScheduleRepository repository){
        this.repository = repository;
    }

    @Override
    public Set<Schedule> getAll() {
        return repository.findAll().stream().collect(Collectors.toSet());
    }

    @Override
    public Schedule create(Schedule schedule) {
        return repository.save(schedule);
    }

    @Override
    public Schedule read(String s) {
        return this.repository.findById(s).orElse(null);
    }

    @Override
    public Schedule update(Schedule schedule) {
        return repository.save(schedule);
    }

    @Override
    public void delete(String s) {
        repository.deleteById(s);
    }
}
