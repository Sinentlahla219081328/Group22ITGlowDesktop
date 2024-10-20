package za.ac.cput.factory;

import za.ac.cput.domain.Client;
import za.ac.cput.util.Helper;

/*
Likhona Nxusani
 */
public class ClientFactory {

    public static Client buildClient(String firstName, String lastName, String email, String password) {
        if (Helper.isNullOrEmpty(firstName) || Helper.isNullOrEmpty(lastName)
                || Helper.isNullOrEmpty(email) || Helper.isNullOrEmpty(password)) {
            return null;  // Ensure none of the fields are empty
        }

        if (!Helper.isValidEmail(email)) {
            return null;  // Validate the email format
        }

        return new Client.Builder()
                .setFirstName(firstName)
                .setLastName(lastName)
                .setEmail(email)
                .setPassword(password)
                .build();
    }
}
