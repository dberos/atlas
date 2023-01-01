package com.eam.atlas.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @PostMapping("/register")
    public Users registerUser(@RequestBody Users user) {
        return usersService.registerUser(user);
    }

    @PostMapping("/login")
    public Users loginUser(@RequestBody Users user) {
        return usersService.loginUser(user);
    }

}
