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
    private String marks_name;
    @Lob
    private byte[] marks;
    private String status;
    private String answer;
    private Boolean submitted;

    public Interest(int undergraduate_id,
                    int internship_id,
                    String description,
                    String marks_name,
                    byte[] marks,
                    String status,
                    String answer,
                    Boolean submitted) {
        this.undergraduate_id = undergraduate_id;
        this.internship_id = internship_id;
        this.description = description;
        this.marks_name = marks_name;
        this.marks = marks;
        this.status = status;
        this.answer = answer;
        this.submitted = submitted;
    }

    public Interest(int id,
                    String answer) {
        this.id = id;
        this.answer = answer;
    }

    public Interest(int id) {
        this.id = id;
    }
}
