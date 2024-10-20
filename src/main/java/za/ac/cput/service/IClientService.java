package za.ac.cput.service;


import za.ac.cput.domain.Client;
import za.ac.cput.domain.Employee;

import java.util.List;

public interface IClientService extends IService <Client, String> {

    List<Client> getAll();
}
