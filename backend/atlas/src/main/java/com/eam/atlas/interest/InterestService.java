package com.eam.atlas.interest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class InterestService {

    private final InterestRepository interestRepository;

    @Autowired
    public InterestService(InterestRepository interestRepository) {
        this.interestRepository = interestRepository;
    }

    public List<Interest> getInterests() {
        return interestRepository.findAll();
    }

    public List<Interest> getInterestByUndergraduateId(int undergraduate_id) {
        return interestRepository.findInterestsByUndergraduateId(undergraduate_id);
    }

    public List<Interest> getSavedInterestsByUndergraduateId(int undergraduate_id) {
        return interestRepository.findSavedInterestsByUndergraduateId(undergraduate_id);
    }

    public List<Interest> getSubmittedInterestsByUndergraduateId(int undergraduate_id) {
        return interestRepository.findSubmittedInterestsByUndergraduateId(undergraduate_id);
    }

    public List<Interest> getInterestsByInternshipId(int internship_id, String status) {
        return interestRepository.findInterestsByInternshipId(internship_id, "await");
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
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        interestRepository.save(interest);
        // Return with the id
        Interest createdInterest = interestRepository.findInterest(interest.getUndergraduate_id(),
                                                                    interest.getInternship_id());
        return createdInterest;
    }

    public Interest editInterest(Interest interest) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Interest oldInterest = interestRepository.findInterestById(interest.getId());
        oldInterest.setMarks_name(interest.getMarks_name());
        oldInterest.setDescription(interest.getDescription());
        oldInterest.setStatus("await");
        oldInterest.setSubmitted(true);
        interestRepository.save(oldInterest);
        return oldInterest;
    }

    public Interest addMarks(int id, MultipartFile marks) throws IOException {
        Interest interest = interestRepository.findInterestById(id);
        interest.setMarks(marks.getBytes());
        interestRepository.save(interest);
        return interest;
    }

    public Interest acceptInterest(Interest interest) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Interest acceptedInterest = interestRepository.findInterestById(interest.getId());
        acceptedInterest.setStatus("accepted");
        interestRepository.save(acceptedInterest);
        return acceptedInterest;
    }

    public Interest rejectInterest(Interest interest) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Interest rejectedInterest = interestRepository.findInterestById(interest.getId());
        rejectedInterest.setStatus("rejected");
        rejectedInterest.setAnswer(interest.getAnswer());
        interestRepository.save(rejectedInterest);
        return rejectedInterest;
    }

    public void answerAllInterests(int id, String status) {
        List<Interest> interests = interestRepository.findInterestsByInternshipId(id, "await");
        for(Interest i : interests) {
            i.setStatus("rejected");
            if(i.getAnswer() == null) {
                i.setAnswer("Η θέση έχει συμπληρωθεί");
            }
            interestRepository.save(i);
        }
    }

    public void deleteInterest(int id) {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        Interest interest = interestRepository.findInterestById(id);
        InterestId interestId = new InterestId(interest.getId(),
                                                interest.getUndergraduate_id(),
                                                interest.getInternship_id());
        interestRepository.deleteById(interestId);
    }
}
