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

    public Boolean findEmail(String email) {
        Optional<Users> userOptional = usersRepository.findByEmail(email);
        return !userOptional.isPresent() ? true : false;
    }

    public Users registerUser(Users user) {
        Optional<Users> userOptional = usersRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        // Create normal user with Transient undergraduate fields
        Users normalUser = new Users(user.getEmail(), user.getPassword(),
                user.getTelephone(), user.getType());
        usersRepository.save(normalUser);

        // Check whether user is Undergraduate or Company
        String type = user.getType();
        if (type.equals("undergraduate")) {
            // Create Undergraduate
            Undergraduates undergradUser = new Undergraduates(normalUser.getId(),
                                                                user.getFirst_name(),
                                                                user.getLast_name(),
                                                                user.getField(),
                                                                user.getUniversity());
            undergraduatesRepository.save(undergradUser);
        }
        else if (type.equals("company")) {
            // Create Company
            Companies companyUser = new Companies(normalUser.getId(),
                                                    user.getName(),
                                                    user.getTown(),
                                                    user.getStreet(),
                                                    user.getStreet_number());
            companiesRepository.save(companyUser);
        }
        else {
            throw new IllegalStateException("something went wrong");
        }
        Optional<Users> finalOptionalUser = usersRepository.findByEmail(user.getEmail());
        Users finalUser = new Users(finalOptionalUser.get().getId(),
                                    finalOptionalUser.get().getEmail(),
                                    finalOptionalUser.get().getType());
        return finalUser;
    }

    public Users loginUser(Users user) {
        Optional<Users> userOptional = usersRepository.findByEmail(user.getEmail());
        if (!userOptional.isPresent()) {
            throw new IllegalStateException("wrong credentials");
        }
        if (!userOptional.get().getPassword().equals(user.getPassword())) {
            throw new IllegalStateException("wrong credentials");
        }
        Users finalUser = new Users(userOptional.get().getId(),
                                    userOptional.get().getEmail(),
                                    userOptional.get().getType());
        return finalUser;
    }
}
