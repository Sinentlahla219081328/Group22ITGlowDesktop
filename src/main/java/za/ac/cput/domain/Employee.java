package za.ac.cput.domain;

/*
Aphelele Zimkhita Joka 218130260
 */

import java.util.Objects;

public class Employee {
    private String employeeID;
    private String firstName;
    private String lastName;
    private String userName;

    protected Employee() {

    }
    private Employee(Builder builder){
        this.employeeID= builder.employeeID;
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.userName = builder.userName;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return Objects.equals(employeeID, employee.employeeID) && Objects.equals(firstName, employee.firstName) && Objects.equals(lastName, employee.lastName) && Objects.equals(userName, employee.userName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(employeeID, firstName, lastName, userName);
    }

    @Override
    public String toString() {
        return "Employee{" +
                "employeeID='" + employeeID + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                '}';
    }
    public static class Builder{
        private String employeeID;
        private String firstName;
        private String lastName;
        private String userName;

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
        public Builder copy(Employee employee){
            this.employeeID= employee.employeeID;
            this.firstName = employee.firstName;
            this.lastName = employee.lastName;
            this.userName = employee.userName;
            return this;

        }
        public Employee build(){
            return new Employee(this);
        }
    }

}
