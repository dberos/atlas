package com.eam.atlas.users;

import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Blob;

@Entity
@Table(name="users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT) // To exclude null and 0 at return
public class Users {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) int id;
    private String email;
    private String password;
    private String telephone;
    private String type;

    // Undergraduate User

    @Transient
    private String first_name;
    @Transient
    private String last_name;
    @Transient
    private String university;
    @Transient
    private @Lob Blob marks;

    // Company User

    @Transient
    private String name;
    @Transient
    private  String town;
    @Transient
    private String street;
    @Transient
    private int street_number;

    public Users(int id, String email, String password, String telephone, String type) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.type = type;
    }

    public Users(String email, String password, String telephone, String type) {
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.type = type;
    }


    // Undergraduate User
    public Users(int id,
                 String email,
                 String password,
                 String telephone,
                 String type,
                 String first_name,
                 String last_name,
                 String university,
                 Blob marks) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.type = type;
        this.first_name = first_name;
        this.last_name = last_name;
        this.university = university;
        this.marks = marks;
    }

    // Company User
    public Users(int id,
                 String email,
                 String password,
                 String telephone,
                 String type,
                 String name,
                 String town,
                 String street,
                 int street_number) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.telephone = telephone;
        this.type = type;
        this.name = name;
        this.town = town;
        this.street = street;
        this.street_number = street_number;
    }

    public Users(int id,
                 String email,
                 String type) {
        this.id = id;
        this.email = email;
        this.type = type;
    }

    public Users(String email,
                 String password) {
        this.email = email;
        this.password = password;
    }
}
