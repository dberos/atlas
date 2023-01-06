package com.eam.atlas.interest;

import com.eam.atlas.company.Company;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;

@Entity
@Table(name = "interests")
@IdClass(InterestId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class Interest {

    @Id
    private int undergraduate_id;
    @Id
    private int internship_id;
    @OneToOne
    @JoinColumn(name = "company_id")
    private Company company;
    @Transient
    private int company_id;
    private String description;
    private @Lob Blob marks;
    private Boolean submitted;
}
