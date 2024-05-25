package za.ac.cput.factory;

/*
Factory class Contact
Author: Najeeb Yusuf Abdi (219480702)
Date: 17 May 2024
 */

import za.ac.cput.domain.Contact;
import za.ac.cput.util.Helper;


public class ContactFactory {

    public static Contact buildContact(String email, String mobile, String workTelephone) {
        if (!Helper.isValidEmail(email) || !Helper.isValidPhoneNumber(mobile) || !Helper.isValidPhoneNumber(workTelephone)) {
            return null;

        }

        return new Contact.Builder()
                .setEmail(email)
                .setMobile(mobile)
                .setWorkTelephone(workTelephone)
                .build();
    }

}



