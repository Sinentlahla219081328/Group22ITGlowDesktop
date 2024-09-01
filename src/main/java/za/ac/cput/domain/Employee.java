package za.ac.cput.domain;

/*
 Aphelele Zimkhita Joka 218130260

 */

import jakarta.persistence.*;

import java.util.Objects;
@Entity
public class Employee {
    @Id
    private String employeeID;
    private String firstName;
    private String lastName;
    private String userName;
    private String jobPosition;
    private String password;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "email")
    private Contact contact;


    protected Employee() {

    }

    private Employee(Builder builder) {
        this.employeeID= builder.employeeID;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.userName = builder.userName;
        this.jobPosition = builder.jobPosition;
        this.password = builder.password;
        contact = builder.contact;

    }

    public String getEmployeeID() {
        return employeeID;
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

    public String getJobPosition() {return jobPosition;}

    public String getPassword() {return password;}

    public Contact getContact() {
        return contact;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(employeeID, employee.employeeID) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(userName, employee.userName) && Objects.equals(jobPosition, employee.jobPosition) && Objects.equals(password, employee.password) && Objects.equals(contact, employee.contact);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeID, firstName, lastName, userName, jobPosition, password, contact);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeID='" + employeeID + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", jobPosition='" + jobPosition + '\'' +
                ", password='" + password + '\'' +
                ", contact=" + contact +
                '}';
    }

    public static class Builder {
        private String employeeID;
        private String firstName;
        private String lastName;
        private String userName;
        private String jobPosition;
        private String password;
        private Contact contact;

        public Builder setEmployeeID(String employeeID) {
            this.employeeID = employeeID;
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

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder setContact(Contact contact) {
            this.contact = contact;
            return this;
        }

        public Builder copy(Employee employee) {
            this.employeeID = employee.employeeID;
            this.firstName = employee.firstName;
            this.lastName = employee.lastName;
            this.userName = employee.userName;
            this.jobPosition = employee.jobPosition;
            this.password = employee.password;
            this.contact = employee.contact;
            return this;
        }
        public Employee build() {
            return new Employee(this);
        }
    }
}
