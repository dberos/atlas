package com.eam.atlas.internship;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface InternshipRepository extends JpaRepository<Internship, Integer> {

    @Query("select i from Internship i where i.id = ?1")
    Internship findInternshipById(int id);

    @Query("select i from Internship i where i.espa = true " +
            "and i.submitted = true and i.undergraduate = null")
    List<Internship> findEspaInternships();

    @Query("select i from Internship i where i.espa = false " +
            "and i.submitted = true and i.undergraduate = null")
    List<Internship> findNoEspaInternships();

    @Query("select i from Internship i where i.company.id = ?1")
    List<Internship> findInternshipsByCompanyId(int company_id);

    @Query("select i from Internship i where i.company.id = ?1 and i.submitted = false")
    List<Internship> findSavedInternshipsByCompanyId(int companyId);

    @Query("select i from Internship i where i.company.id = ?1 and i.submitted = true")
    List<Internship> findSubmittedInternshipsByCompanyId(int company_id);

    // If date is null post 00/00/0000
    // If duration is null post -1
    @Query("select i from Internship i where " +
            "ifnull(?1, i.field) = i.field " +
            "and ifnull(?2, i.university) = i.university " +
            "and Date(?3) <= Date(i.start_date) " +
            "and ifnull(?4, i.area) = i.area " +
            "and i.duration = if((?5 = -1), i.duration, ?5) " +
            "and ifnull(?6, i.type) = i.type " +
            "and ifnull(?7, i.espa) = i.espa " +
            "and i.submitted = true " +
            "and i.undergraduate = null ")
    List<Internship> searchInternships(String field,
                                       String university,
                                       Date start_date,
                                       String area,
                                       int duration,
                                       String type,
                                       Boolean espa);

}
