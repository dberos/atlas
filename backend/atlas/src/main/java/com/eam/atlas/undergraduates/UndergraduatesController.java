package com.eam.atlas.undergraduates;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(path = "/undergraduates")
@RestController
public class UndergraduatesController {

    private final UndergraduatesService undergraduatesService;

    @Autowired
    public UndergraduatesController(UndergraduatesService undergraduatesService) {
        this.undergraduatesService = undergraduatesService;
    }

    @GetMapping
    public List<Undergraduates> getUndergraduates() {
        return undergraduatesService.getUndergraduates();
    }

    @PostMapping
    public Undergraduates addUndergraduate(@RequestBody Undergraduates undergraduate) {
        return undergraduatesService.addUndergraduate(undergraduate);
    }
}
