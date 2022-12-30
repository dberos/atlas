package com.eam.atlas.undergraduates;

import jakarta.persistence.*;

import java.sql.Blob;
import java.util.Objects;

@Entity
@Table(name = "undergraduates")
public class Undergraduates {

    private @Id int id;
    private String first_name;
    private String last_name;
    private String university;
    private @Lob Blob marks;

    public Undergraduates() {
    }

    public Undergraduates(int id, String first_name, String last_name, String university, Blob marks) {
        this.id = id;
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
        Undergraduates that = (Undergraduates) o;
        return id == that.id && Objects.equals(first_name, that.first_name) &&
                Objects.equals(last_name, that.last_name) &&
                Objects.equals(university, that.university) &&
                Objects.equals(marks, that.marks);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, first_name, last_name, university, marks);
    }

    @Override
    public String toString() {
        return "Undergraduates{" +
                "id=" + id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", university='" + university + '\'' +
                ", marks=" + marks +
                '}';
    }
}
