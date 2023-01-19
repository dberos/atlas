package com.eam.atlas.company;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/companies")
@RestController
@CrossOrigin
public class CompanyController {

    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    List<Company> getCompanies() {
        return companyService.getCompanies();
    }

    @GetMapping("/id={id}")
    Optional<Company> getCompanyById(@PathVariable int id) {
        return companyService.getCompanyById(id);
    }

}
