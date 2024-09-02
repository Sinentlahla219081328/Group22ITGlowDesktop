package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Employee;
import za.ac.cput.factory.EmployeeFactory;

import static org.junit.jupiter.api.Assertions.*;

class EmployeeFactoryTest {

    @Test
    void testBuildEmployee() {
        Employee e = EmployeeFactory.buildEmployee(
                218130278L,       // idNumber
                "Aphelele",        // firstName
                "Joka",            // lastName
                "Aphelele218130260", // userName
                "Nail Tech",       // jobPosition
                "Ajoka1234",       // password
                "apelelejoka@gmail.com" // email
        );
        assertNotNull(e);
        System.out.println(e.toString());
    }

    @Test
    void testBuildEmployeeWithFail() {
        Employee e = EmployeeFactory.buildEmployee(
                null,              // idNumber
                "zimkhita",        // firstName
                "jay",             // lastName
                "sanejay",         // userName
                "Nail Tech",       // jobPosition
                "Ajoka1234",       // password
                ""                 // email
        );
        assertNull(e);
        System.out.println(e);
    }
}
