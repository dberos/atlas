package com.eam.atlas.interest;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InterestId implements Serializable {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int undergraduate_id;
    private int internship_id;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InterestId that = (InterestId) o;
        return id == that.id && undergraduate_id == that.undergraduate_id && internship_id == that.internship_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, undergraduate_id, internship_id);
    }
}
