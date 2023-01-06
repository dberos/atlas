package com.eam.atlas.interest;

import com.eam.atlas.company.Company;
import com.eam.atlas.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class InterestService {

    private final InterestRepository interestRepository;
    private final CompanyRepository companyRepository;

    @Autowired
    public InterestService(InterestRepository interestRepository, CompanyRepository companyRepository) {
        this.interestRepository = interestRepository;
        this.companyRepository = companyRepository;
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
        Optional<Company> company = companyRepository.findById(interest.getCompany_id());
        if(company.isEmpty()) {
            throw new IllegalStateException("company not present");
        }
        interest.setCompany(company.get());
        interestRepository.save(interest);
        return interest;
    }
}
