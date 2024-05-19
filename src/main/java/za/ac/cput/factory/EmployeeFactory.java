package za.ac.cput.factory;

/*

 */

import za.ac.cput.domain.Employee;
import za.ac.cput.util.Helper;

public class EmployeeFactory {
    public static Employee buildEmployee(String employeeID, String firstName, String lastName, String userName,Contact contact){
        if (Helper.isNullOrEmpty(employeeID) || Helper.isNullOrEmpty(firstName)
                || Helper.isNullOrEmpty(lastName)|| Helper.isNullOrEmpty(userName) ||
                Helper.isNullOrEmpty(String.valueOf(contact)))
            return null;
        return new Employee.Builder().setEmployeeID(employeeID)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setContact(contact)
                .build();
    }
    public static Employee buildEmployee(String firstName, String lastName, String userName,Contact contact){
        if (Helper.isNullOrEmpty(firstName)
                || Helper.isNullOrEmpty(userName))
            return null;
        String employeeID = Helper.generateId();
        return new Employee.Builder().setEmployeeID(employeeID)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setContact(contact)
                .build();
    }
}
