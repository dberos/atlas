package com.eam.atlas.undergraduate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UndergraduateService {

    private final UndergraduateRepository undergraduateRepository;

    @Autowired
    public UndergraduateService(UndergraduateRepository undergraduateRepository) {
        this.undergraduateRepository = undergraduateRepository;
    }

    public List<Undergraduate> getUndergraduates() {
        return undergraduateRepository.findAll();
    }

    public Optional<Undergraduate> getUndergraduate(int id) {
        return undergraduateRepository.findById(id);
    }
}
