package za.ac.cput.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import za.ac.cput.domain.Client;
import za.ac.cput.service.ClientService;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3004")
@RequestMapping("/client")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @PostMapping("/create")
    public ResponseEntity<Client> create(@RequestBody Client client) {
        Client createdClient = clientService.create(client);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdClient);
    }

    @GetMapping("/read/{email}")
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity<Client> read(@PathVariable String email) {
        Client client = clientService.read(email); // Using email as the identifier
        return ResponseEntity.ok(client);
    }

    @PostMapping("/update")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Client> update(@RequestBody Client client) {
        Client updatedClient = clientService.update(client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/delete/{email}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> delete(@PathVariable String email) {
        clientService.delete(email); // Deleting by email
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/getAll")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<List<Client>> getAll() {
        List<Client> clients = clientService.getAll();
        return ResponseEntity.ok(clients);
    }
}
