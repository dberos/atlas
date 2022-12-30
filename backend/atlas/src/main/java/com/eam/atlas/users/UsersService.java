package com.eam.atlas.users;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.companies.CompaniesRepository;
import com.eam.atlas.undergraduates.Undergraduates;
import com.eam.atlas.undergraduates.UndergraduatesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    private final UsersRepository usersRepository;
    private final UndergraduatesRepository undergraduatesRepository;
    private final CompaniesRepository companiesRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository,
                        UndergraduatesRepository undergraduatesRepository,
                        CompaniesRepository companiesRepository) {
        this.usersRepository = usersRepository;
        this.undergraduatesRepository = undergraduatesRepository;
        this.companiesRepository = companiesRepository;
    }

    public List<Users> getUsers() {
        return usersRepository.findAll();
    }

    public Users addUser(Users user) {
        Optional<Users> userOptional = usersRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        return usersRepository.save(user);
    }

    public Optional<Users> addUndergraduateUser(Users user) {
        Optional<Users> userOptional = usersRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        // Create normal user with Transient undergraduate fields
        Users normalUser = new Users(user.getEmail(), user.getPassword(),
                                        user.getTelephone(), user.getType());
        usersRepository.save(normalUser);

        // Create Undergraduate
        Undergraduates undergradUser = new Undergraduates(normalUser.getId(), user.getFirst_name(),
                                                            user.getLast_name(), user.getUniversity(),
                                                                user.getMarks());
        undergraduatesRepository.save(undergradUser);

        // Return updated user with its ID
        return usersRepository.findByEmail(user.getEmail());
    }

    public Optional<Users> addCompanyUser(Users user) {
        Optional<Users> userOptional = usersRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        // Create normal user with Transient undergraduate fields
        Users normalUser = new Users(user.getEmail(), user.getPassword(),
                user.getTelephone(), user.getType());
        usersRepository.save(normalUser);

        // Create Company
        Companies companyUser = new Companies(normalUser.getId(), user.getName(),
                                                user.getTown(), user.getStreet(),
                                                user.getStreet_number());
        companiesRepository.save(companyUser);
        // Return updated user with its ID
        return usersRepository.findByEmail(user.getEmail());
    }
}
