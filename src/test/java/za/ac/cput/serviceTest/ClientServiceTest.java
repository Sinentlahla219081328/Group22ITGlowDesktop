package za.ac.cput.serviceTest;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Client;
import za.ac.cput.factory.ClientFactory;
import za.ac.cput.service.ClientService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)
class ClientServiceTest {

    @Autowired
    private ClientService service;

    private static Client client;

    @Test
    void a_setup() {
        client = ClientFactory.buildClient("Sipho", "Dibela", "siphodibela@gmail.com", "password123");
        assertNotNull(client);
        System.out.println(client);
    }

    @Test
    void b_create() {
        Client created = service.create(client);
        assertNotNull(created);
        System.out.println(created);
    }

    @Test
    void c_read() {
        Client read = service.read(client.getEmail()); // Use email as the identifier
        assertNotNull(read);
        System.out.println(read);
    }

    @Test
    void d_update() {
        Client newClient = new Client.Builder().copy(client)
                .setFirstName("Zigalo")
                .build();
        Client updated = service.update(newClient);
        assertNotNull(updated);
        System.out.println(updated);
    }

    @Test
    @Disabled
    void f_delete() {
        // You can implement this if needed in the future
    }

    @Test
    void e_getAll() {
        System.out.println(service.getAll());
    }
}
