package com.eam.atlas.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/users")
@RestController
public class UsersController {

    private final UsersService usersService;

    @Autowired
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping
    public List<Users> getUsers() {
        return usersService.getUsers();
    }

    @PostMapping
    public Users addUser(@RequestBody Users user) {
        return usersService.addUser(user);
    }

    @PostMapping("/undergraduate")
    public Optional<Users> addUndergraduateUser(@RequestBody Users user) {
        return usersService.addUndergraduateUser(user);
    }

    @PostMapping("/company")
    public Optional<Users> addCompanyUser(@RequestBody Users user) {
        return usersService.addCompanyUser(user);
    }

}
