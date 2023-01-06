package com.eam.atlas.interest;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.companies.CompaniesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InterestService {

    private final InterestRepository interestRepository;
    private final CompaniesRepository companiesRepository;

    @Autowired
    public InterestService(InterestRepository interestRepository, CompaniesRepository companiesRepository) {
        this.interestRepository = interestRepository;
        this.companiesRepository = companiesRepository;
    }

    public List<Interest> getInterests() {
        return interestRepository.findAll();
    }

    public List<Interest> getInterestByUndergraduateId(int undergraduate_id) {
        return interestRepository.findInterestsByUndergraduateId(undergraduate_id);
    }

    public List<Interest> getInterestsByInternshipId(int internship_id) {
        return interestRepository.findInterestsByInternshipId(internship_id);
    }

    public Interest addInterest(Interest interest) {
        Optional<Companies> company = companiesRepository.findById(interest.getCompanies_id());
        if(company.isEmpty()) {
            throw new IllegalStateException("company not present");
        }
        interest.setCompany(company.get());
        interestRepository.save(interest);
        return interest;
    }
}
