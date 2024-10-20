package za.ac.cput.repository;
/*
Aphelele Zimkhita Joka 218130260
 */
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import za.ac.cput.domain.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

}
