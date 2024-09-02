package za.ac.cput.service;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import za.ac.cput.domain.Employee;
import za.ac.cput.repository.EmployeeRepository;

import java.util.List;
@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    EmployeeService(EmployeeRepository repository){
        this.repository = repository;
    }


    @Override
    public Employee create(Employee employee) {return repository.save(employee);}
    @Override
    public Employee read(Long idNumber) {
        return repository.findById(idNumber).orElse(null);
    }
    @Override
    public Employee update(Employee employee) {
        return repository.save(employee);
    }
    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
    @Override
    public List<Employee> getall() {
        return repository.findAll() ;
    }
    public Employee login(@RequestBody Employee request){
        Employee employee = EmployeeRepository.findEmployeeByUsername(request.getUserName());
        if (employee != null && employee.getPassword().equals(request.getPassword())){
            return new Employee(true,"login successful");
        }else{
            return new Employee(false, "Invalid username or password");
        }
    }

}
