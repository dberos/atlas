package com.eam.atlas.undergraduate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/undergraduates")
@RestController
public class UndergraduateController {

    private final UndergraduateService undergraduatesService;

    @Autowired
    public UndergraduateController(UndergraduateService undergraduatesService) {
        this.undergraduatesService = undergraduatesService;
    }

    @GetMapping
    public List<Undergraduate> getUndergraduates() {
        return undergraduatesService.getUndergraduates();
    }
}
