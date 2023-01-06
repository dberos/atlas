package com.eam.atlas.interest;

import com.eam.atlas.companies.Companies;
import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Blob;

@Entity
@Table(name = "interest")
@IdClass(InterestId.class)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_DEFAULT)
public class Interest {

    @Id
    private int undergraduates_id;
    @Id
    private int internship_id;
    @OneToOne
    @JoinColumn(name = "companies_id")
    private Companies company;
    @Transient
    private int companies_id;
    private String description;
    private @Lob Blob marks;
    private Boolean submitted;
}
