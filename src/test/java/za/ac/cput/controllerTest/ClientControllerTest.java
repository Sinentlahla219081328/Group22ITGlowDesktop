package za.ac.cput.controllerTest;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.ResponseEntity;
import za.ac.cput.domain.Client;
import za.ac.cput.factory.ClientFactory;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@TestMethodOrder(MethodOrderer.MethodName.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ClientControllerTest {
    @Autowired
    private TestRestTemplate restTemplate;

    private final String BASE_URL = "http://localhost:8080/ITGlow/client";

    private static Client client;

    @BeforeAll
    public static void setup(){

        client = ClientFactory.buildClient("5788", "Liks", "Nxusani", "Likhona@gmail.com", "0723451632", "0215734628");

    }


    @Test
    void a_create() {
        String URL = BASE_URL + "/create";
        ResponseEntity<Client> postResponse = restTemplate.postForEntity(URL, client, Client.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Client clientSaved = postResponse.getBody();
        assertEquals(client.getClientId(), clientSaved.getClientId());
        System.out.println("Created Client: " + clientSaved);

    }

    @Test
    void b_read() {
        String URL = BASE_URL + "/read/" + client.getClientId();
        System.out.println("URL: " + URL);
        ResponseEntity<Client> response = restTemplate.getForEntity(URL, Client.class);
        assertNotNull(response.getBody());
        System.out.println("Read Client: " + response.getBody());
        assertEquals(client.getClientId(), response.getBody().getClientId());
    }

    @Test
    void c_update() {
        String URL = BASE_URL + "/update";
        Client newClient = new Client.Builder().copy(client).setFirstName("Likhona").build();
        ResponseEntity<Client> postResponse = restTemplate.postForEntity(URL, newClient, Client.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Client clientUpdated = postResponse.getBody();
        System.out.println("Updated Client: " + clientUpdated);
        assertEquals(newClient.getClientId(), clientUpdated.getClientId());
    }

    @Disabled
    @Test
    void d_delete() {
        String URL = BASE_URL + "/delete/" + client.getClientId();
        System.out.println("URL: " + URL);
        restTemplate.delete(URL);
        System.out.println("Success: Deleted client");
    }

    @Test
    void e_getAll() {
        String URL = BASE_URL + "/getAll";
        ResponseEntity<String> response = restTemplate.getForEntity(URL, String.class);
        System.out.println("Show All: ");
        System.out.println(response);
        System.out.println(response.getBody());
    }
}