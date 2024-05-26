package za.ac.cput.factory;

/*
<<<<<<< HEAD
Aphelele Zimkhita Joka
 */

import org.apache.commons.validator.routines.EmailValidator;
=======
Factory class Contact
Author: Najeeb Yusuf Abdi (219480702)
Date: 17 May 2024
 */

>>>>>>> origin/master
import za.ac.cput.domain.Contact;
import za.ac.cput.util.Helper;


public class ContactFactory {

<<<<<<< HEAD
    public static Contact buildContact(String email, String mobileNumber, String workTelephone) {
        if (!Helper.isValidEmail(email) || !Helper.isValidPhoneNumber(mobileNumber) || !Helper.isValidPhoneNumber(workTelephone)) {
=======
    public static Contact buildContact(String email, String mobile, String workTelephone) {
        if (!Helper.isValidEmail(email) || !Helper.isValidPhoneNumber(mobile) || !Helper.isValidPhoneNumber(workTelephone)) {
>>>>>>> origin/master
            return null;

        }

        return new Contact.Builder()
                .setEmail(email)
<<<<<<< HEAD
                .setMobileNumber(mobileNumber)
=======
                .setMobile(mobile)
>>>>>>> origin/master
                .setWorkTelephone(workTelephone)
                .build();
    }

}



