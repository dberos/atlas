package com.eam.atlas.users;

import jakarta.persistence.*;

import java.sql.Blob;
import java.util.Objects;

@Entity
@Table(name="users")
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

    public Users() {
    }

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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    // Undergraduate User


    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public Blob getMarks() {
        return marks;
    }

    public void setMarks(Blob marks) {
        this.marks = marks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Users users = (Users) o;
        return id == users.id && Objects.equals(email, users.email) &&
                Objects.equals(password, users.password) &&
                Objects.equals(telephone, users.telephone) &&
                Objects.equals(type, users.type) &&
                Objects.equals(first_name, users.first_name) &&
                Objects.equals(last_name, users.last_name) &&
                Objects.equals(university, users.university) &&
                Objects.equals(marks, users.marks);
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", telephone='" + telephone + '\'' +
                ", type='" + type + '\'' +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", university='" + university + '\'' +
                ", marks=" + marks +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, telephone, type, first_name, last_name, university, marks);
    }

}
