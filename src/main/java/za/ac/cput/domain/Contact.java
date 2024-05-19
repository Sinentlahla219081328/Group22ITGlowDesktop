package za.ac.cput.domain;
//218130260AZJoka

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.io.Serializable;
import java.util.Objects;
@Entity
public class Contact implements Serializable {
    @Id
    private String email;
    private String mobileNumber;
    private String workTelephone;

    protected Contact() {
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
        Contact contact = (Contact) o;
        return Objects.equals(email, contact.email) && Objects.equals(mobileNumber, contact.mobileNumber) && Objects.equals(workTelephone, contact.workTelephone);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, mobileNumber, workTelephone);
    }


}

