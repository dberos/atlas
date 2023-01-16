package com.eam.atlas.interest;

import com.eam.atlas.company.Company;
import com.eam.atlas.company.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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

    public ResponseEntity<byte[]> getMarks(int id) {
        Interest interest = interestRepository.findInterestById(id);
        byte[] marks = interest.getMarks();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Content-type", MediaType.APPLICATION_PDF_VALUE);
        // To download change inline to attachment
        headers.set("Content-Disposition","inline; filename=\"marks.pdf\"");
        return ResponseEntity.status(HttpStatus.OK).headers(headers).body(marks);
    }

    public Interest addInterest(Interest interest) {
        try {
            // Wait for success message to show at user
            // Then remove from active internships
            Thread.sleep(3000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
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

    public Interest acceptInterest(Interest interest) {
        Interest acceptedInterest = interestRepository.findInterestById(interest.getId());
        acceptedInterest.setStatus("accepted");
        interestRepository.save(acceptedInterest);
        return acceptedInterest;
    }

    public Interest rejectInterest(Interest interest) {
        Interest rejectedInterest = interestRepository.findInterestById(interest.getId());
        rejectedInterest.setStatus("rejected");
        rejectedInterest.setAnswer(interest.getAnswer());
        interestRepository.save(rejectedInterest);
        return rejectedInterest;
    }
}
