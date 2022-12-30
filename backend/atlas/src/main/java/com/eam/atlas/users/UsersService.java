package com.eam.atlas.users;

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

    @Autowired
    public UsersService(UsersRepository usersRepository, UndergraduatesRepository undergraduatesRepository) {
        this.usersRepository = usersRepository;
        this.undergraduatesRepository = undergraduatesRepository;
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
}
