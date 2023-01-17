package com.eam.atlas.interest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RequestMapping(path = "/interests")
@RestController
@CrossOrigin
public class InterestController {

    private final InterestService interestService;

    @Autowired
    public InterestController(InterestService interestService) {
        this.interestService = interestService;
    }

    @GetMapping
    public List<Interest> getInterests() {
        return interestService.getInterests();
    }

    @GetMapping("/undergraduate_id={undergraduate_id}")
    public List<Interest> getInterestsByUndergraduateId(@PathVariable int undergraduate_id) {
        return interestService.getInterestByUndergraduateId(undergraduate_id);
    }

    @GetMapping("/saved/undergraduate_id={undergraduate_id}")
    public List<Interest> getSavedInterestsByUndergraduateId(@PathVariable int undergraduate_id) {
        return interestService.getSavedInterestsByUndergraduateId(undergraduate_id);
    }

    @GetMapping("/submitted/undergraduate_id={undergraduate_id}")
    public List<Interest> getSubmittedInterestsByUndergraduateId(@PathVariable int undergraduate_id) {
        return interestService.getSubmittedInterestsByUndergraduateId(undergraduate_id);
    }

    @GetMapping("/internship_id={internship_id}")
    public List<Interest> getInterestsByInternshipId(@PathVariable int internship_id) {
        return interestService.getInterestsByInternshipId(internship_id);
    }

    @GetMapping("/marks/{id}/{name}")
    public ResponseEntity<byte[]> getMarks(@PathVariable int id,
                                           @PathVariable(required = false)
                                           String name) {
        return interestService.getMarks(id);
    }

    @PostMapping
    public Interest addInterest(@RequestBody Interest interest) {
        return interestService.addInterest(interest);
    }

    @PutMapping
    public Interest editInterest(@RequestBody Interest interest) {
        return interestService.editInterest(interest);
    }

    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Interest addMarks(@PathVariable int id,
                             @RequestParam("marks")
                             MultipartFile marks) throws IOException {
        return interestService.addMarks(id, marks);
    }

    @PutMapping(value = "/accept")
    public Interest acceptInterest(@RequestBody Interest interest) {
        return interestService.acceptInterest(interest);
    }

    @PutMapping(value = "/reject")
    public Interest rejectInterest(@RequestBody Interest interest) {
        return interestService.rejectInterest(interest);
    }

    @DeleteMapping("/id={id}")
    public void deleteInterest(@PathVariable int id) {
        interestService.deleteInterest(id);
    }
}
