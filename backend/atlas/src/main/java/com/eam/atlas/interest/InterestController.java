package com.eam.atlas.interest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/internship_id={internship_id}")
    public List<Interest> getInterestsByInternshipId(@PathVariable int internship_id) {
        return interestService.getInterestsByInternshipId(internship_id);
    }

    @PostMapping
    public Interest addInterest(@RequestBody Interest interest) {
        return interestService.addInterest(interest);
    }
}
