package com.eam.atlas.internship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping(path = "/internships")
@RestController
@CrossOrigin
public class InternshipController {

    private final InternshipService internshipService;

    @Autowired
    public InternshipController(InternshipService internshipService) {
        this.internshipService = internshipService;
    }

    @GetMapping
    public List<Internship> getInternships() {
        return internshipService.getInternships();
    }

    @GetMapping("/company_id={company_id}")
    public List<Internship> getInternshipsByCompanyId(@PathVariable int company_id) {
        return internshipService.getInternshipsByCompanyId(company_id);
    }

    @PostMapping
    public Internship addInternship(@RequestBody Internship internship) {
        return internshipService.addInternship(internship);
    }

    @PostMapping("/search")
    public List<Internship> searchInternships(@RequestBody Internship internship) {
        return internshipService.searchInternships(internship);
    }

    @PutMapping("/accept")
    public Internship acceptUndergraduate(@RequestBody Internship internship) {
        return internshipService.acceptUndergraduate(internship);
    }
}
