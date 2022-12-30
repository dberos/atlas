package com.eam.atlas.users;

import com.eam.atlas.undergraduates.Undergraduates;
import com.eam.atlas.undergraduates.UndergraduatesRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UsersConfig {

    @Bean
    CommandLineRunner commandLineRunner(UsersRepository usersRepository,
                                        UndergraduatesRepository undergraduatesRepository) {
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
            Undergraduates undergrad1 = new Undergraduates(
                    1,
                    "first_name",
                    "last_name",
                    "university",
                    null
            );
            Undergraduates undergrad2 = new Undergraduates(
                    2,
                    "first_name",
                    "last_name",
                    "university",
                    null
            );
            usersRepository.saveAll(List.of(user1, user2));
            undergraduatesRepository.saveAll(List.of(undergrad1, undergrad2));
        };
    }
}
