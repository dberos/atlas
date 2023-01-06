package com.eam.atlas.undergraduate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/undergraduates")
@RestController
public class UndergraduateController {

    private final UndergraduateService undergraduateService;

    @Autowired
    public UndergraduateController(UndergraduateService undergraduateService) {
        this.undergraduateService = undergraduateService;
    }

    @GetMapping
    public List<Undergraduate> getUndergraduates() {
        return undergraduateService.getUndergraduates();
    }
}
