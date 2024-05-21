package za.ac.cput.util;

import org.apache.commons.validator.routines.EmailValidator;
import java.util.UUID;
import java.util.regex.Pattern;

public class Helper {

    public static boolean isNullOrEmpty(String s) {
        if (s == null|| s.isEmpty())
            return true;
        return false;
    }

    public static String generateId(){

        return UUID.randomUUID().toString();
    }

    public static boolean isValidEmail(String email) {
        EmailValidator validator = EmailValidator.getInstance();
        return validator.isValid(email);
    }

    public static boolean isValidPhoneNumber(String phoneNumber) {
        String regex = "\\d{10}";
        Pattern pattern = Pattern.compile(regex);
        return pattern.matcher(phoneNumber).matches();

    }
}
