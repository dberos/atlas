package com.eam.atlas.undergraduates;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "undergraduates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Undergraduates {

    @Id
    private int id;
    private String first_name;
    private String last_name;
    private String field;
    private String university;

}
