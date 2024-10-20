package za.ac.cput.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import za.ac.cput.domain.Client;
import za.ac.cput.domain.Employee;
import za.ac.cput.repository.ClientRepository;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ClientService implements IClientService {

    private ClientRepository repository;

    @Autowired
    ClientService (ClientRepository repository){
        this.repository = repository;
    }

    @Override
    public Client create(Client client) {
        return repository.save(client);
    }

    @Override
    public Client read(String id) {
        return this.repository.findById(id).orElse(null);
    }

    @Override
    public Client update(Client client) {
        return repository.save(client);
    }

    @Override
    public void delete(String id) {
        repository.deleteById(id);
    }

    @Override
    public List<Client> getAll() {
        return repository.findAll();
    }

}
