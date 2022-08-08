package com.checkpoint.orabitbol.repository;

import com.checkpoint.orabitbol.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends  JpaRepository<Employee,Long> {

    public Employee findByEmail(String email);
}
