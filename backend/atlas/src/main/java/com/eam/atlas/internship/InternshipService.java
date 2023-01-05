package com.eam.atlas.internship;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.companies.CompaniesRepository;
import com.eam.atlas.undergraduates.Undergraduates;
import com.eam.atlas.undergraduates.UndergraduatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;
    private final CompaniesRepository companiesRepository;
    private final UndergraduatesRepository undergraduatesRepository;

    @Autowired
    public InternshipService(InternshipRepository internshipRepository,
                             CompaniesRepository companiesRepository,
                             UndergraduatesRepository undergraduatesRepository) {
        this.internshipRepository = internshipRepository;
        this.companiesRepository = companiesRepository;
        this.undergraduatesRepository = undergraduatesRepository;
    }

    public List<Internship> getInternships() {
        return internshipRepository.findAll();
    }

    public List<Internship> getInternshipsByCompanyId(int company_id) {
        return internshipRepository.findInternshipsByCompanyId(company_id);
    }

    public Internship addInternship(Internship internship) {
        Optional<Companies> company = companiesRepository.findById(internship.getCompany_id());
        if(company.isEmpty()) {
            throw new IllegalStateException("company not present");
        }
        internship.setCompany(company.get());
        internshipRepository.save(internship);
        return internship;
    }

    public Internship acceptUndergraduate(Internship internship) {
        Optional<Internship> internshipOptional = internshipRepository.findById(internship.getId());
        if(internshipOptional.isEmpty()) {
            throw  new IllegalStateException("internship not present");
        }
        else if(internshipOptional.get().getUndergraduate() != null) {
            throw new IllegalStateException("internship is already taken");
        }
        Optional<Undergraduates> undergraduate = undergraduatesRepository.findById(internship.getUndergraduate_id());
        if(undergraduate.isEmpty()) {
            throw new IllegalStateException("undergraduate not present");
        }
        internshipOptional.get().setUndergraduate(undergraduate.get());
        internshipRepository.save(internshipOptional.get());
        return internshipOptional.get();
    }
}
