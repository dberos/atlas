package com.eam.atlas.internship;

import com.eam.atlas.company.Company;
import com.eam.atlas.company.CompanyRepository;
import com.eam.atlas.undergraduate.Undergraduate;
import com.eam.atlas.undergraduate.UndergraduateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InternshipService {

    private final InternshipRepository internshipRepository;
    private final CompanyRepository companyRepository;
    private final UndergraduateRepository undergraduateRepository;

    @Autowired
    public InternshipService(InternshipRepository internshipRepository,
                             CompanyRepository companyRepository,
                             UndergraduateRepository undergraduateRepository) {
        this.internshipRepository = internshipRepository;
        this.companyRepository = companyRepository;
        this.undergraduateRepository = undergraduateRepository;
    }

    public List<Internship> getInternships() {
        return internshipRepository.findAll();
    }

    public Optional<Internship> getInternship(int id) {
        return internshipRepository.findById(id);
    }

    public List<Internship> getEspaInternships() {
        return internshipRepository.findEspaInternships();
    }

    public List<Internship> getNoEspaInternships() {
        return internshipRepository.findNoEspaInternships();
    }

    public List<Internship> getInternshipsByCompanyId(int company_id) {
        return internshipRepository.findInternshipsByCompanyId(company_id);
    }

    public List<Internship> getSavedInternshipsByCompanyId(int company_id) {
        return internshipRepository.findSavedInternshipsByCompanyId(company_id);
    }

    public List<Internship> getSubmittedInternshipsByCompanyId(int company_id) {
        return internshipRepository.findSubmittedInternshipsByCompanyId(company_id);
    }

    public Internship addInternship(Internship internship) {
        Optional<Company> company = companyRepository.findById(internship.getCompany_id());
        if(company.isEmpty()) {
            throw new IllegalStateException("company not present");
        }
        internship.setCompany(company.get());
        internshipRepository.save(internship);
        return internship;
    }

    public List<Internship> searchInternships(Internship internship) {
        return internshipRepository.searchInternships(internship.getField(),
                                                        internship.getUniversity(),
                                                        internship.getStart_date(),
                                                        internship.getArea(),
                                                        internship.getDuration(),
                                                        internship.getType(),
                                                        internship.getEspa());
    }

    public Internship acceptUndergraduate(Internship internship) {
        Optional<Internship> internshipOptional = internshipRepository.findById(internship.getId());
        if(internshipOptional.isEmpty()) {
            throw  new IllegalStateException("internship not present");
        }
        else if(internshipOptional.get().getUndergraduate() != null) {
            throw new IllegalStateException("internship is already taken");
        }
        Optional<Undergraduate> undergraduate = undergraduateRepository.findById(internship.getUndergraduate_id());
        if(undergraduate.isEmpty()) {
            throw new IllegalStateException("undergraduate not present");
        }
        internshipOptional.get().setUndergraduate(undergraduate.get());
        internshipRepository.save(internshipOptional.get());
        return internshipOptional.get();
    }

    public Internship editInternship(Internship internship) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Internship oldInternship = internshipRepository.findInternshipById(internship.getId());
        oldInternship.setTitle(internship.getTitle());
        oldInternship.setField(internship.getField());
        oldInternship.setUniversity(internship.getUniversity());
        oldInternship.setArea(internship.getArea());
        oldInternship.setStart_date(internship.getStart_date());
        oldInternship.setDuration(internship.getDuration());
        oldInternship.setType(internship.getType());
        oldInternship.setEspa(internship.getEspa());
        oldInternship.setSalary(internship.getSalary());
        oldInternship.setDescription(internship.getDescription());
        oldInternship.setSubmitted(true);
        internshipRepository.save(oldInternship);
        return oldInternship;
    }

    public void deleteInternship(int id) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Internship internship = internshipRepository.findInternshipById(id);
        internshipRepository.delete(internship);
    }
}
