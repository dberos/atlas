package com.eam.atlas.companies;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Objects;

@Entity
@Table(name = "companies")
public class Companies {

    private @Id int id;
    private String name;
    private String town;
    private String street;
    private int street_number;

    public Companies() {
    }

    public Companies(int id, String name, String town, String street, int street_number) {
        this.id = id;
        this.name = name;
        this.town = town;
        this.street = street;
        this.street_number = street_number;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public int getStreet_number() {
        return street_number;
    }

    public void setStreet_number(int street_number) {
        this.street_number = street_number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Companies companies = (Companies) o;
        return id == companies.id && street_number == companies.street_number && Objects.equals(name, companies.name) && Objects.equals(town, companies.town) && Objects.equals(street, companies.street);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, town, street, street_number);
    }

    @Override
    public String toString() {
        return "Companies{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", town='" + town + '\'' +
                ", street='" + street + '\'' +
                ", street_number=" + street_number +
                '}';
    }
}
