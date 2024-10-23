package za.ac.cput.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import za.ac.cput.domain.Service;
import za.ac.cput.service.ServiceService;

import java.util.List;

@RestController
@RequestMapping("/service")
public class ServiceController {
    @Autowired
    private ServiceService serviceService;
    @PostMapping("/create")
    public Service create(@RequestBody Service service){return serviceService.create(service);}
    @GetMapping("/read/{serviceCode}")
    public Service read(@PathVariable Long serviceCode){return serviceService.read(serviceCode);}
    @PostMapping("/update")
    public Service update (@RequestBody Service service){return serviceService.update(service);}
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long serviceCode){serviceService.delete(serviceCode);}
    @GetMapping("/getall")
    public List<Service> getAll(){return serviceService.getAll();}

}
