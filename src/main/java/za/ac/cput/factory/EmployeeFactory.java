package za.ac.cput.factory;

/*
Aphelele Zimkhita Joka
 */

import za.ac.cput.domain.Contact;
import za.ac.cput.domain.Employee;
import za.ac.cput.util.Helper;

public class EmployeeFactory {
    public static Employee buildEmployee(Long employeeID, String firstName, String lastName, String userName,
                                         String jobPosition, String password, String email, String mobileNumber, String workTelephone, String success, String message) {
        if (Helper.isNullOrEmpty(firstName) || Helper.isNullOrEmpty(lastName)
                || Helper.isNullOrEmpty(userName) || Helper.isNullOrEmpty(jobPosition)
                || Helper.isNullOrEmpty(password) || Helper.isNullOrEmpty(success)
                || Helper.isNullOrEmpty(message)) {
            return null;
        }

        Contact contact = ContactFactory.buildContact(email, mobileNumber, workTelephone);

        if (contact == null) {
            return null;
        }

        return new Employee.Builder().setEmployeeID(employeeID)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setJobPosition(jobPosition)
                .setPassword(password)
                .setMessage(message)
                .setSuccess(Boolean.parseBoolean(success))
                .setContact(contact)
                .build();
    }
}
