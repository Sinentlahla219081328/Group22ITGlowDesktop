package za.ac.cput.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import za.ac.cput.domain.Client;

public interface ClientRepository extends JpaRepository<Client, String> {
    Client findClientByClientId(String clientId);
}
