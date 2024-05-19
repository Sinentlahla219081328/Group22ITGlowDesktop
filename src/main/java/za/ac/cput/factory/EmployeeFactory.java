package za.ac.cput.factory;

/*

 */

import za.ac.cput.domain.Employee;
import za.ac.cput.util.Helper;

public class EmployeeFactory {
    public static Employee buildEmployee(String employeeID, String firstName, String lastName, String userName,
                                         String email,String mobileNumber,String workTelephone){
        if (Helper.isNullOrEmpty(employeeID) || Helper.isNullOrEmpty(firstName)
                || Helper.isNullOrEmpty(lastName)|| Helper.isNullOrEmpty(userName) ||
                Helper.isNullOrEmpty(mobileNumber) ||Helper.isNullOrEmpty(workTelephone) ||Helper.isNullOrEmpty(email))

                //Helper.isNullOrEmpty(String.valueOf(contact)))
            return null;
        return new Employee.Builder().setEmployeeID(employeeID)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setEmail(email)
                .setMobileNumber(mobileNumber)
                .setWorkTelephone(workTelephone)
              //  .setContact(contact)
                .build();
    }
    public static Employee buildEmployee(String firstName, String lastName, String userName,
                                         String email,String mobileNumber,String workTelephone){
        if (Helper.isNullOrEmpty(firstName)
                || Helper.isNullOrEmpty(userName))
            return null;
        String employeeID = Helper.generateId();
        return new Employee.Builder().setEmployeeID(employeeID)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setEmail(email)
                .setMobileNumber(mobileNumber)
                .setWorkTelephone(workTelephone)

                .build();
    }
}
