package za.ac.cput.controllerTest;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import za.ac.cput.domain.Employee;
import za.ac.cput.factory.EmployeeFactory;

import static org.junit.jupiter.api.Assertions.*;
@TestMethodOrder(MethodOrderer.MethodName.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class EmployeeControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;
    private final String BASE_URL= "http://localhost:8080/ITGlowDesktop/employee";
    private static Employee employee;

    @Test
    void a_setup(){
        employee = EmployeeFactory.buildEmployee("218130260","joka","zimkhita","vsxyb","aphelele@gmal.com","084536","02184");
    }
    @Test
    void b_create() {
        String url = BASE_URL + "/create";
        ResponseEntity<Employee> postRespponse = restTemplate.postForEntity(url, employee, Employee.class);
        assertNotNull(postRespponse);
        assertNotNull(postRespponse.getBody());
        Employee employeeSaved = postRespponse.getBody();
        assertEquals(employee.getEmployeeID(), employeeSaved.getEmployeeID());
        System.out.println("Saved date" + employeeSaved);
    }
    @Test
    void c_read(){
        String url = BASE_URL + "/read/" + employee.getEmployeeID();
        System.out.println("URL: " + url);
        ResponseEntity<Employee>respponse = restTemplate.getForEntity(url, Employee.class);
        assertEquals(employee.getEmployeeID(), respponse.getBody().getEmployeeID());
        System.out.println("Read: " + respponse.getBody());
    }
    @Test
    void d_update(){
        String url = BASE_URL + "/update";
        Employee newEmployee = new Employee.Builder().copy(employee).setFirstName("Kungenceba").build();
        ResponseEntity<Employee>postResponse = restTemplate.postForEntity(url, newEmployee, Employee.class);
        assertNotNull(postResponse);
        assertNotNull(postResponse.getBody());
        Employee employeeUpdated = postResponse.getBody();
        assertEquals(newEmployee.getEmployeeID(),employeeUpdated.getEmployeeID());
        System.out.println("Updated date: " + employeeUpdated);
    }
    @Test
    void e_delete(){
        String url = BASE_URL + "/delete/" + employee.getEmployeeID();
        System.out.println("URL: " + url);
        restTemplate.delete(url);
        System.out.println("Successfully deleted employee");
    }
    @Test
    void f_getAll(){
        String url = BASE_URL + "/getall/";
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<>(null,headers);
        HttpEntity<String>response = restTemplate.exchange(url, HttpMethod.GET, entity, String.class);
        System.out.println("Show all");
        System.out.println(response);
        System.out.println(response.getBody());
    }

}