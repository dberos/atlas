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

    private final CompaniesService companiesService;

    @Autowired
    public InternshipService(InternshipRepository internshipRepository, CompaniesRepository companiesRepository, CompaniesService companiesService) {
        this.internshipRepository = internshipRepository;
        this.companiesRepository = companiesRepository;
        this.companiesService = companiesService;
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
        Internship newInternship = new Internship(internship.getTitle(),
                                                    internship.getField(),
                                                    internship.getStart_date(),
                                                    internship.getArea(),
                                                    internship.getDuration(),
                                                    internship.getType(),
                                                    internship.getEspa(),
                                                    internship.getSalary(),
                                                    internship.getDescription(),
                                                    company.get());
        internshipRepository.save(newInternship);
        return  newInternship;
    }
}
