package com.eam.atlas.user;

import com.eam.atlas.company.Company;
import com.eam.atlas.company.CompanyRepository;
import com.eam.atlas.undergraduate.Undergraduate;
import com.eam.atlas.undergraduate.UndergraduateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UndergraduateRepository undergraduateRepository;
    private final CompanyRepository companyRepository;

    @Autowired
    public UserService(UserRepository userRepository,
                       UndergraduateRepository undergraduateRepository,
                       CompanyRepository companyRepository) {
        this.userRepository = userRepository;
        this.undergraduateRepository = undergraduateRepository;
        this.companyRepository = companyRepository;
    }

    public List<User> getUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    public Boolean findEmail(String email) {
        Optional<User> userOptional = userRepository.findByEmail(email);
        return !userOptional.isPresent() ? true : false;
    }

    public User registerUser(User user) {
        Optional<User> userOptional = userRepository.findByEmail(user.getEmail());
        if (userOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        // Create normal user with Transient undergraduate fields
        User normalUser = new User(user.getEmail(), user.getPassword(),
                user.getTelephone(), user.getType());
        userRepository.save(normalUser);

        // Check whether user is Undergraduate or Company
        String type = user.getType();
        if (type.equals("undergraduate")) {
            // Create Undergraduate
            Undergraduate undergradUser = new Undergraduate(normalUser.getId(),
                                                                user.getFirst_name(),
                                                                user.getLast_name(),
                                                                user.getField(),
                                                                user.getUniversity());
            undergraduateRepository.save(undergradUser);
        }
        else if (type.equals("company")) {
            // Create Company
            Company companyUser = new Company(normalUser.getId(),
                                                    user.getName(),
                                                    user.getTown(),
                                                    user.getStreet(),
                                                    user.getStreet_number());
            companyRepository.save(companyUser);
        }
        else {
            throw new IllegalStateException("something went wrong");
        }
        Optional<User> finalOptionalUser = userRepository.findByEmail(user.getEmail());
        User finalUser = new User(finalOptionalUser.get().getId(),
                                    finalOptionalUser.get().getEmail(),
                                    finalOptionalUser.get().getType());
        return finalUser;
    }

    public User loginUser(User user) {
        Optional<User> userOptional = userRepository.findByEmail(user.getEmail());
        if (!userOptional.isPresent()) {
            throw new IllegalStateException("wrong credentials");
        }
        if (!userOptional.get().getPassword().equals(user.getPassword())) {
            throw new IllegalStateException("wrong credentials");
        }
        User finalUser = new User(userOptional.get().getId(),
                                    userOptional.get().getEmail(),
                                    userOptional.get().getType());
        return finalUser;
    }
}
