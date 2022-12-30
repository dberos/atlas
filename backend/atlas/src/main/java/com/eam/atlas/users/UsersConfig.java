package com.eam.atlas.users;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UsersConfig {

    @Bean
    CommandLineRunner commandLineRunner(UsersRepository repository) {
        return args -> {
            Users user1 = new Users(
                    1,
                    "email1@atlas.gr",
                    "1234",
                    "1234",
                    "undergraduate"
            );
            Users user2 = new Users(
                    2,
                    "email2@atlas.gr",
                    "1234",
                    "1234",
                    "undergraduate"
            );
            repository.saveAll(List.of(user1, user2));
        };
    }
}
