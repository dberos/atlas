package com.eam.atlas.companies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompaniesService {

    private final CompaniesRepository companiesRepository;

    @Autowired
    public CompaniesService(CompaniesRepository companiesRepository) {
        this.companiesRepository = companiesRepository;
    }


    public List<Companies> getCompanies() {
        return companiesRepository.findAll();
    }

    public Companies addCompany(Companies company) {
        return companiesRepository.save(company);
    }
}
