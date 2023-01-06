package com.eam.atlas.interest;

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
    private int id;
    @Id
    private int undergraduate_id;
    @Id
    private int internship_id;
    private String description;
    @Lob
    private Blob marks;
    private Boolean submitted;

    public Interest(int undergraduate_id,
                    int internship_id,
                    String description,
                    Blob marks,
                    Boolean submitted) {
        this.undergraduate_id = undergraduate_id;
        this.internship_id = internship_id;
        this.description = description;
        this.marks = marks;
        this.submitted = submitted;
    }
}
