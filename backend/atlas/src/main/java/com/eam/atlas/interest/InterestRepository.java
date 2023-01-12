package com.eam.atlas.interest;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InterestRepository extends JpaRepository<Interest, InterestId> {

    @Query("select i from Interest i where i.id = ?1")
    Interest findInterestById(int id);

    @Query("select i from Interest i where i.undergraduate_id = ?1 and i.internship_id = ?2")
    Interest findInterest(int undergraduate_id, int internship_id);

    @Query("select i from Interest i where i.undergraduate_id = ?1")
    List<Interest> findInterestsByUndergraduateId(int undergraduate_id);

    @Query("select i from Interest i where i.internship_id = ?1")
    List<Interest> findInterestsByInternshipId(int internship_id);
}
