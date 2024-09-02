package za.ac.cput.factory;

/*
Aphelele Zimkhita Joka
*/

import za.ac.cput.domain.Employee;
import za.ac.cput.util.Helper;

public class EmployeeFactory {
    public static Employee buildEmployee(Long idNumber, String firstName, String lastName, String userName,
                                         String jobPosition, String password, String email) {
        if (Helper.isNullOrEmpty(String.valueOf(idNumber)) || Helper.isNullOrEmpty(firstName)
                || Helper.isNullOrEmpty(lastName) || Helper.isNullOrEmpty(userName)
                || Helper.isNullOrEmpty(jobPosition) || Helper.isNullOrEmpty(password)
                || Helper.isNullOrEmpty(email)) {
            return null;
        }

        return new Employee.Builder()
                .setIdNumber(idNumber)
                .setFirstName(firstName)
                .setLastName(lastName)
                .setUserName(userName)
                .setJobPosition(jobPosition)
                .setPassword(password)
                .setEmail(email)
                .build();
    }
}
