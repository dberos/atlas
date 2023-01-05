package com.eam.atlas.companies;

import com.eam.atlas.internship.Internship;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "companies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Companies {

    private @Id int id;
    private String name;
    private String town;
    private String street;
    private int street_number;

    @OneToMany
    @JsonIgnore
    private Set<Internship> internships;

    public Companies(int id, String name, String town, String street, int street_number) {
        this.id = id;
        this.name = name;
        this.town = town;
        this.street = street;
        this.street_number = street_number;
    }
}
