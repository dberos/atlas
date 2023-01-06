package com.eam.atlas.internship;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InternshipRepository extends JpaRepository<Internship, Integer> {
    @Query("select i from Internship i where i.company.id = ?1")
    List<Internship> findInternshipsByCompanyId(int company_id);

}
