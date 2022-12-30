package com.eam.atlas.users;

import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name="users")
public class Users {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) int id;
    private String email;
    private String password;
    private String telephone;
    private String type;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Users users = (Users) o;
        return id == users.id && Objects.equals(email, users.email) &&
                Objects.equals(password, users.password) &&
                Objects.equals(telephone, users.telephone) &&
                Objects.equals(type, users.type);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, telephone, type);
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", telephone='" + telephone + '\'' +
                ", type='" + type + '\'' +
                '}';
    }
}
