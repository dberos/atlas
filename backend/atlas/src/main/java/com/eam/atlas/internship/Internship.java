package com.eam.atlas.internship;

import com.eam.atlas.companies.Companies;
import com.eam.atlas.undergraduates.Undergraduates;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
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
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class Internship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String field;
    private String university;
    @JsonFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date start_date;
    private String area;
    private int duration;
    private String type;
    private Boolean espa;
    private int salary;
    private String description;
    private Boolean submitted;
    @ManyToOne
    @JoinColumn(name = "companies_id", nullable = false)
    private Companies company;

    @OneToOne
    @JoinColumn(name = "undergraduates_id")
    private Undergraduates undergraduate;

    // To generate constructors for POST and PUT Mapping
    @Transient
    private int company_id;
    @Transient
    private int undergraduate_id;

    public Internship(int id,
                      String title,
                      String field,
                      String university,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description,
                      Boolean submitted) {
        this.id = id;
        this.title = title;
        this.field = field;
        this.university = university;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
        this.submitted = submitted;
    }

    public Internship(String title,
                      String field,
                      String university,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description,
                      Boolean submitted) {
        this.title = title;
        this.field = field;
        this.university = university;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
        this.submitted = submitted;
    }

    public Internship(String title,
                      String field,
                      String university,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description,
                      Boolean submitted,
                      Companies company) {
        this.title = title;
        this.field = field;
        this.university = university;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
        this.submitted = submitted;
        this.company = company;
    }

    public Internship(String title,
                      String field,
                      String university,
                      Date start_date,
                      String area,
                      int duration,
                      String type,
                      Boolean espa,
                      int salary,
                      String description,
                      Boolean submitted,
                      int company_id) {
        this.title = title;
        this.field = field;
        this.university = university;
        this.start_date = start_date;
        this.area = area;
        this.duration = duration;
        this.type = type;
        this.espa = espa;
        this.salary = salary;
        this.description = description;
        this.submitted = submitted;
        this.company_id = company_id;
    }

    public Internship(int id,
                      int undergraduate_id) {
        this.id = id;
        this.undergraduate_id = undergraduate_id;
    }
}
