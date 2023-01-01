package com.eam.atlas.undergraduates;

import com.eam.atlas.users.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UndergraduatesService {

    private final UndergraduatesRepository undergraduatesRepository;

    @Autowired
    public UndergraduatesService(UndergraduatesRepository undergraduatesRepository) {
        this.undergraduatesRepository = undergraduatesRepository;
    }

    public List<Undergraduates> getUndergraduates() {
        return undergraduatesRepository.findAll();
    }

}
