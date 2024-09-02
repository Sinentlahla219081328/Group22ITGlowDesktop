package za.ac.cput.domain;

/*
 Aphelele Zimkhita Joka 218130260

 */

import jakarta.persistence.*;

import java.util.Objects;
@Entity
public class Employee {
    @Id
    private Long idNumber;
    private String firstName;
    private String lastName;
    private String userName;
    private String jobPosition;
    private String email;
    private String password;

    protected Employee() {
    }

    private Employee(Builder builder) {
        this.idNumber = builder.idNumber;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.userName = builder.userName;
        this.jobPosition = builder.jobPosition;
        this.email = builder.email;
        this.password = builder.password;
    }

    public Long getIdNumber() {
        return idNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getUserName() {
        return userName;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(idNumber, employee.idNumber) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(userName, employee.userName) && Objects.equals(jobPosition, employee.jobPosition) && Objects.equals(email, employee.email) && Objects.equals(password, employee.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idNumber, firstName, lastName, userName, jobPosition, email, password);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "idNumber='" + idNumber + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", jobPosition='" + jobPosition + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public static class Builder {
        private Long idNumber;
        private String firstName;
        private String lastName;
        private String userName;
        private String jobPosition;
        private String email;
        private String password;

        public Builder setIdNumber(Long idNumber) {
            this.idNumber = idNumber;
            return this;
        }

        public Builder setFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder setLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder setUserName(String userName) {
            this.userName = userName;
            return this;
        }

        public Builder setJobPosition(String jobPosition) {
            this.jobPosition = jobPosition;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder copy(Employee employee) {
            this.idNumber = employee.idNumber;
            this.firstName = employee.firstName;
            this.lastName = employee.lastName;
            this.userName = employee.userName;
            this.jobPosition = employee.jobPosition;
            this.email = employee.email;
            this.password = employee.password;
            return this;
        }

        public Employee build() {
            return new Employee(this);
        }
    }
}