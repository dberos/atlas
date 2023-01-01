package com.eam.atlas.companies;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/companies")
@RestController
public class CompaniesController {

    private final CompaniesService companiesService;

    @Autowired
    public CompaniesController(CompaniesService companiesService) {
        this.companiesService = companiesService;
    }

    @GetMapping
    List<Companies> getCompanies() {
        return companiesService.getCompanies();
    }

}
