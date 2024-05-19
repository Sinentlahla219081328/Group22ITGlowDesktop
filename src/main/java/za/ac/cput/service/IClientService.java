package za.ac.cput.service;

import za.ac.cput.domain.Client;

import java.util.Set;

public interface IClientService extends IService<Client, String>{
    Set<Client> getAll();
}
