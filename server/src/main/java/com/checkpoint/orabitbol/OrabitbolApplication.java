package com.checkpoint.orabitbol;

import com.checkpoint.orabitbol.model.Employee;
import com.checkpoint.orabitbol.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OrabitbolApplication implements CommandLineRunner{

    public static void main(String[] args) {
        SpringApplication.run(OrabitbolApplication.class, args);
    }


        @Autowired
        private EmployeeRepository employeeRepository;

        @Override
        public void run(String... args) throws Exception {
//            Employee employee = new Employee();
//            employee.setFirstName("david");
//            employee.setLastName("davidov");
//            employee.setEmailId("david@gmail.com");
//            employeeRepository.save(employee);
//
//            Employee employee1 = new Employee();
//            employee.setFirstName("or");
//            employee.setLastName("ffdafdsa");
//            employee.setEmailId("or@gmail.com");
//            employeeRepository.save(employee1);
        }


}
