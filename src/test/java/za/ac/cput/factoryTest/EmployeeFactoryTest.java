package za.ac.cput.factoryTest;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Employee;
import za.ac.cput.factory.EmployeeFactory;

import static org.junit.jupiter.api.Assertions.*;

class EmployeeFactoryTest {

    @Test
    void testBuildEmployee() {
        Employee e = EmployeeFactory.buildEmployee(
                218130278L,
                "Aphelele",
                "Joka",
                "Aphelele218130260",
                "Nail Tech",
                "Ajoka1234",
                "apelelejoka@gmail.com",
                "0712345678",
                "0211234567",
                "true",
                "Employee created successfully"
        );
        assertNotNull(e);
        System.out.println(e.toString());
    }

    @Test
    void testBuildEmployeeWithFail() {
        Employee e = EmployeeFactory.buildEmployee(
                0L,
                "zimkhita",
                "jay",
                "sanejay",
                "Nail Tech",
                "Ajoka1234",
                "",
                "0712345678",
                "0211234567",
                "true",
                "Failed to create employee"
        );
        assertNotNull(e);
        System.out.println(e);
    }
}
