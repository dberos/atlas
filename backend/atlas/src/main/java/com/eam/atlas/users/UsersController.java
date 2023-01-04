package com.eam.atlas.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping(path = "/users")
@RestController
@CrossOrigin
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

    @GetMapping("/{email}")
    public Boolean findEmail(@PathVariable String email) {
        return usersService.findEmail(email);
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
