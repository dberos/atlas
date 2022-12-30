package com.eam.atlas.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsersService {

    private final UsersRepository usersRepository;

    @Autowired
    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
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
}
