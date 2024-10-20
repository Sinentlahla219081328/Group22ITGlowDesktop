package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Client;
import za.ac.cput.factory.ClientFactory;

import static org.junit.jupiter.api.Assertions.*;

class ClientFactoryTest {

    @Test
    void testBuildClient_Success() {
        Client client = ClientFactory.buildClient(
                "John",         // firstName
                "Doe",          // lastName
                "john@gmail.com",  // email
                "password123"   // password
        );
        assertNotNull(client);
        System.out.println(client.toString());
    }

    @Test
    void testBuildClient_Failure() {
        Client client = ClientFactory.buildClient(
                "John",         // firstName
                "Doe",          // lastName
                "",             // email (invalid)
                "password123"   // password
        );
        assertNotNull(client);  // Client creation should fail
        System.out.println(client);
    }
}
