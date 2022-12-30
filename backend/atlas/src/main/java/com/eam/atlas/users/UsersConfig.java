package com.eam.atlas.users;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.companies.CompaniesRepository;
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
                                        UndergraduatesRepository undergraduatesRepository,
                                        CompaniesRepository companiesRepository) {
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
                    "company"
            );
            Users user3 = new Users(
                    3,
                    "email3@atlas.gr",
                    "1234",
                    "1234",
                    "undergraduate"
            );
            Users user4 = new Users(
                    4,
                    "email4@atlas.gr",
                    "1234",
                    "1234",
                    "company"
            );
            Undergraduates undergrad1 = new Undergraduates(
                    1,
                    "first_name",
                    "last_name",
                    "university",
                    null
            );
            Undergraduates undergrad3 = new Undergraduates(
                    3,
                    "first_name",
                    "last_name",
                    "university",
                    null
            );
            Companies company2 = new Companies(
                    2,
                    "name",
                    "town",
                    "street",
                    1
            );
            Companies company4 = new Companies(
                    4,
                    "name",
                    "town",
                    "street",
                    1
            );
            usersRepository.saveAll(List.of(user1, user2, user3, user4));
            undergraduatesRepository.saveAll(List.of(undergrad1, undergrad3));
            companiesRepository.saveAll(List.of(company2, company4));
        };
    }
}
