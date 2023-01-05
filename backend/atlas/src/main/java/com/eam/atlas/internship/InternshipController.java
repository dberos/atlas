package com.eam.atlas.internship;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequestMapping(path = "/internship")
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

    @GetMapping("/{company_id}")
    public List<Internship> getInternshipsByCompanyId(@PathVariable int company_id) {
        return internshipService.getInternshipsByCompanyId(company_id);
    }

    @PostMapping("/{company_id}")
    public Internship addInternship(@RequestBody Internship internship,
                                    @PathVariable int company_id) {
        return internshipService.addInternship(internship, company_id);
    }
}
