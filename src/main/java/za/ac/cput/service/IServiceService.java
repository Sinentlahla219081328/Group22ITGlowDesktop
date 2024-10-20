package za.ac.cput.service;
/*
Aphelele Zimkhita Joka 218130260
 */

import za.ac.cput.domain.Service;

import java.util.List;

public interface IServiceService extends IService <Service, Long> {

    List<Service> getAll();
}
