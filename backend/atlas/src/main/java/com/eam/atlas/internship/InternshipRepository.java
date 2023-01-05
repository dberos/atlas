package com.eam.atlas.internship;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface InternshipRepository extends JpaRepository<Internship, Integer> {
    @Query("select i from Internship i where i.company.id = :company_id")
    List<Internship> findInternshipsByCompanyId(int company_id);

}
