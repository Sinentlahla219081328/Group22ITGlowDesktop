package za.ac.cput.serviceTest;


import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import za.ac.cput.domain.Employee;
import za.ac.cput.factory.EmployeeFactory;
import za.ac.cput.service.EmployeeService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.MethodName.class)

class EmployeeServiceTest {
    @Autowired
    private EmployeeService employeeService;
    private static Employee employee1;
    private static Employee employee2;

    @Test
    void a_setup(){
        employee1 = EmployeeFactory.buildEmployee("218130260", "joka", "zimkhita", "zimmy1", "hairstylist", "627xhq", "aphelele@gmail.com", "0845368921", "0213378102");
        assertNotNull(employee1);
        System.out.println(employee1);

        employee2 = EmployeeFactory.buildEmployee("218902756", "likhona", "nxusani", "likhs25", "barber", "320pfs", "likhs25@gmail.com", "0613601884", "0217510088");
        assertNotNull(employee2);
        System.out.println(employee2);
    }
    @Test
    void b_create(){
        Employee created1 = employeeService.create(employee1);
        assertNotNull(created1);
        System.out.println(created1);

        Employee created2 = employeeService.create(employee2);
        assertNotNull(created2);
        System.out.println(created2);
    }
    @Test
    void c_read(){
        Employee read = employeeService.read(employee1.getEmployeeID());
        assertNotNull(read);
        System.out.println(read);

    }
    @Test
    void d_update(){
        Employee newEmployee = new Employee.Builder().copy(employee2).setFirstName("Aphelele Zimmy").build();
        Employee updated= employeeService.update(newEmployee);
        assertNotNull(updated);
        System.out.println(updated);
    }
    @Test
    void e_getall(){
        System.out.println(employeeService.getall());
    }

}