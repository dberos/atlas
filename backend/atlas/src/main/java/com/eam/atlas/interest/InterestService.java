package com.eam.atlas.interest;

import com.eam.atlas.company.Company;
import com.eam.atlas.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
        interestRepository.save(interest);
        // Return with the id
        Interest createdInterest = interestRepository.findInterest(interest.getUndergraduate_id(),
                                                                    interest.getInternship_id());
        return createdInterest;
    }

    public Interest addMarks(int id, MultipartFile marks) throws IOException {
        Interest interest = interestRepository.findInterestById(id);
        interest.setMarks(marks.getBytes());
        interestRepository.save(interest);
        return interest;
    }
}
