package com.eam.atlas.undergraduates;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.sql.Blob;

@Entity
@Table(name = "undergraduates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Undergraduates {

    private @Id int id;
    private String first_name;
    private String last_name;
    private String university;
    private @Lob Blob marks;

}
