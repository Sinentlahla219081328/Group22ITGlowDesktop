package za.ac.cput.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Objects;

/*
Aphelele Zimkhita Joka 218130260
 */

@Entity
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceCode;
    private String serviceName;
    private String mensServiceDescription;
    private String womensServiceDescription;
    private double price;

    public Service() {
    }

    public Service(Builder builder) {
        this.serviceCode = builder.serviceCode;
        this.serviceName = builder.serviceName;
        this.mensServiceDescription = builder.mensServiceDescription;
        this.womensServiceDescription = builder.womensServiceDescription;
        this.price = builder.price;
    }

    public Long getServiceCode() {  // Changed return type from String to Long
        return serviceCode;
    }

    public void setServiceCode(Long serviceCode) {  // Added setter for serviceCode
        this.serviceCode = serviceCode;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getMensServiceDescription() {
        return mensServiceDescription;
    }

    public void setMensServiceDescription(String mensServiceDescription) {
        this.mensServiceDescription = mensServiceDescription;
    }

    public String getWomensServiceDescription() {
        return womensServiceDescription;
    }

    public void setWomensServiceDescription(String womensServiceDescription) {
        this.womensServiceDescription = womensServiceDescription;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Service service = (Service) o;
        return Double.compare(service.price, price) == 0 &&
                Objects.equals(serviceCode, service.serviceCode) &&
                Objects.equals(serviceName, service.serviceName) &&
                Objects.equals(mensServiceDescription, service.mensServiceDescription) &&
                Objects.equals(womensServiceDescription, service.womensServiceDescription);
    }

    @Override
    public int hashCode() {
        return Objects.hash(serviceCode, serviceName, mensServiceDescription, womensServiceDescription, price);
    }

    @Override
    public String toString() {
        return "Service{" +
                "serviceCode=" + serviceCode +  // Changed to Long
                ", serviceName='" + serviceName + '\'' +
                ", mensServiceDescription='" + mensServiceDescription + '\'' +
                ", womensServiceDescription='" + womensServiceDescription + '\'' +
                ", price=" + price +
                '}';
    }

    public static class Builder {
        private Long serviceCode;  // Changed from UUID to Long
        private String serviceName;
        private String mensServiceDescription;
        private String womensServiceDescription;
        private double price;

        public Builder setServiceCode(Long serviceCode) {  // Changed parameter type to Long
            this.serviceCode = serviceCode;
            return this;
        }

        public Builder setServiceName(String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        public Builder setMensServiceDescription(String mensServiceDescription) {
            this.mensServiceDescription = mensServiceDescription;
            return this;
        }

        public Builder setWomensServiceDescription(String womensServiceDescription) {
            this.womensServiceDescription = womensServiceDescription;
            return this;
        }

        public Builder setPrice(double price) {
            this.price = price;
            return this;
        }

        public Builder copy(Service service) {
            this.serviceCode = service.serviceCode;  // Changed to Long
            this.serviceName = service.serviceName;
            this.mensServiceDescription = service.mensServiceDescription;
            this.womensServiceDescription = service.womensServiceDescription;
            this.price = service.price;
            return this;
        }

        public Service build() {
            return new Service(this);
        }
    }
}
