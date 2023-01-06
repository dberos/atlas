package com.eam.atlas.interest;

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

    private int undergraduates_id;
    private int internship_id;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        InterestId that = (InterestId) o;
        return undergraduates_id == that.undergraduates_id && internship_id == that.internship_id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(undergraduates_id, internship_id);
    }
}
