package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Client;
import za.ac.cput.factory.ClientFactory;

import static org.junit.jupiter.api.Assertions.*;

class ClientFactoryTest {

    @Test
    void testBuildClient(){
        Client client = ClientFactory.buildClient("246810", "Sipho", "Dibela",
                "246810@gmail.com", "0781234526", "0213458796");
        assertNotNull(client);
        System.out.println(client);
    }

}