package com.eam.atlas.internship;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.companies.CompaniesRepository;
import com.eam.atlas.companies.CompaniesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;
    private final CompaniesRepository companiesRepository;

    @Autowired
    public InternshipService(InternshipRepository internshipRepository,
                             CompaniesRepository companiesRepository) {
        this.internshipRepository = internshipRepository;
        this.companiesRepository = companiesRepository;
    }

    public List<Internship> getInternships() {
        return internshipRepository.findAll();
    }

    public List<Internship> getInternshipsByCompanyId(int company_id) {
        return internshipRepository.findInternshipsByCompanyId(company_id);
    }

    public Internship addInternship(Internship internship, int company_id) {
        Optional<Companies> company = companiesRepository.findById(company_id);
        internship.setCompany(company.get());
        internshipRepository.save(internship);
        return internship;
    }
}
