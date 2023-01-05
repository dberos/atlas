package com.eam.atlas.internship;

import com.eam.atlas.companies.Companies;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "internship")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Internship {

    private @Id @GeneratedValue(strategy = GenerationType.IDENTITY) int id;
    private String title;
    private String field;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date start_date;
    private String area;
    private int duration;
    private String type;
    private Boolean espa;
    private int salary;
    private String description;
    @ManyToOne
    @JoinColumn(name = "companies_id", nullable = false)
    private Companies company;

    public Internship(int id,
                      String title,
                      String field,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description) {
        this.id = id;
        this.title = title;
        this.field = field;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
    }

    public Internship(String title,
                      String field,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description) {
        this.title = title;
        this.field = field;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
    }

    public Internship(String title,
                      String field,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description,
                      Companies company) {
        this.title = title;
        this.field = field;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
        this.company = company;
    }
}
