package za.ac.cput.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.ac.cput.domain.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, String> {
}
