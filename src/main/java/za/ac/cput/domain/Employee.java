package za.ac.cput.domain;

/*
Aphelele Zimkhita Joka 218130260
 */

import jakarta.persistence.*;

import java.util.Objects;
@Entity
@IdClass(Contact.class)
public class Employee {
    @Id
    private String employeeID;
    private String firstName;
    private String lastName;
    private String userName;
@Id
    private String email;
    private String mobileNumber;
    private String workTelephone;

    protected Employee() {

    }

    private Employee(Builder builder) {
        this.employeeID= builder.employeeID;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.userName = builder.userName;
        this.email =  builder.email;
        this.mobileNumber =  builder.mobileNumber;
        this.workTelephone =  builder.workTelephone;
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

    public String getEmail() {
        return email;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public String getWorkTelephone() {

        return workTelephone;
    }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(employeeID, employee.employeeID) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(userName, employee.userName) && Objects.equals(email, employee.email) && Objects.equals(mobileNumber, employee.mobileNumber) && Objects.equals(workTelephone, employee.workTelephone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeID, firstName, lastName, userName, email, mobileNumber, workTelephone);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeID='" + employeeID + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", workTelephone='" + workTelephone + '\'' +
                '}';
    }

    public static class Builder {
        private String employeeID;
        private String firstName;
        private String lastName;
        private String userName;
        private String email;
        private String mobileNumber;
        private String workTelephone;

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

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setMobileNumber(String mobileNumber) {
            this.mobileNumber = mobileNumber;
            return this;
        }

        public Builder setWorkTelephone(String workTelephone) {
            this.workTelephone = workTelephone;
            return this;
        }
        public Builder copy(Employee employee) {
            this.employeeID = employee.employeeID;
            this.firstName = employee.firstName;
            this.lastName = employee.lastName;
            this.userName = employee.userName;
            this.email = employee.email;
            this.mobileNumber= employee.mobileNumber;
            this.workTelephone= employee.workTelephone;

            return this;
        }
        public Employee build() {
            return new Employee(this);
        }
    }
}
