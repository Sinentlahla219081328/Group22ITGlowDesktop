package za.ac.cput.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import za.ac.cput.domain.Client;

import java.util.List;
import java.util.Set;


@Repository
public interface ClientRepository extends JpaRepository<Client, String> {

}
