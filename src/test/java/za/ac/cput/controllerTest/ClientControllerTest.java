package za.ac.cput.controllerTest;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import za.ac.cput.domain.Client;
import za.ac.cput.factory.ClientFactory;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.MethodName.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ClientControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    private final String BASE_URL = "http://localhost:8080/WebSecurity/client";
    private static Client client;

    @BeforeAll
    public static void setup() {
        client = ClientFactory.buildClient("Sipho", "Dibela", "siphodibela@gmail.com", "password123");
    }

    @Test
    void a_create() {
        String URL = BASE_URL + "/create";
        ResponseEntity<Client> postResponse = restTemplate.postForEntity(URL, client, Client.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Client clientSaved = postResponse.getBody();
        assertEquals(client.getEmail(), clientSaved.getEmail());
        System.out.println("Created Client: " + clientSaved);
    }

    @Test
    void b_read() {
        String URL = BASE_URL + "/read/" + client.getEmail();
        System.out.println("URL: " + URL);
        ResponseEntity<Client> response = restTemplate.getForEntity(URL, Client.class);
        assertNotNull(response.getBody());
        System.out.println("Read Client: " + response.getBody());
        assertEquals(client.getEmail(), response.getBody().getEmail());
    }

    @Test
    void c_update() {
        String URL = BASE_URL + "/update";
        Client updatedClient = new Client.Builder()
                .copy(client)
                .setFirstName("Zigalo")
                .build();
        ResponseEntity<Client> postResponse = restTemplate.postForEntity(URL, updatedClient, Client.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Client clientUpdated = postResponse.getBody();
        System.out.println("Updated Client: " + clientUpdated);
        assertEquals(updatedClient.getEmail(), clientUpdated.getEmail());
    }

    @Disabled
    @Test
    void d_delete() {
        String URL = BASE_URL + "/delete/" + client.getEmail();
        System.out.println("URL: " + URL);
        restTemplate.delete(URL);
        System.out.println("Success: Deleted client");
    }

    @Test
    void e_getAll() {
        String URL = BASE_URL + "/getAll";
        ResponseEntity<String> response = restTemplate.getForEntity(URL, String.class);
        System.out.println("Show All Clients: ");
        System.out.println(response.getBody());
    }
}
