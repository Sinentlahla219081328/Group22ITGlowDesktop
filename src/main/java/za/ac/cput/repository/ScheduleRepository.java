package za.ac.cput.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import za.ac.cput.domain.Appointment;
import za.ac.cput.domain.Schedule;
@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, String> {

}
