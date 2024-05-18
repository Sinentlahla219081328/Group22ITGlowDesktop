package za.ac.cput.domain;

/*
Sinentlahla Pindani 219081328
18 may 2024
 */

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Objects;
@Entity
public class Sales {
    @Id
 private String salesId;
 private String employeeID;
 private String salesDescription;

 protected Sales(){}

    private Sales(Builder builder) {
        this.salesId = builder.salesId;
        this.employeeID = builder.employeeID;
        this.salesDescription = builder.salesDescription;
    }

        public String getSalesId () {
            return salesId;
        }

        public String getEmployeeID () {
            return employeeID;
        }

        public String getSalesDescription () {
            return salesDescription;
        }

        @Override
        public boolean equals (Object o){
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;
            Sales sales = (Sales) o;
            return Objects.equals(salesId, sales.salesId) && Objects.equals(employeeID, sales.employeeID) && Objects.equals(salesDescription, sales.salesDescription);
        }

        @Override
        public int hashCode () {
            return Objects.hash(salesId, employeeID, salesDescription);
        }

        @Override
        public String toString () {
            return "Sales{" +
                    "salesId='" + salesId + '\'' +
                    ", employeeID='" + employeeID + '\'' +
                    ", salesDescription='" + salesDescription + '\'' +
                    '}';
        }
        public static class Builder {
            private String salesId;
            private String employeeID;
            private String salesDescription;

            public Builder setSalesId(String salesId) {
                this.salesId = salesId;
                return this;
            }

            public Builder setEmployeeID(String employeeID) {
                this.employeeID = employeeID;
                return this;
            }

            public Builder setSalesDescription(String salesDescription) {
                this.salesDescription = salesDescription;
                return this;
            }

            public Builder copy(Sales sales) {

                this.salesId = sales.salesId;
                this.employeeID = sales.employeeID;
                this.salesDescription = sales.salesDescription;
                return this;
            }

            public Sales build() {
                return new Sales(this);
            }

        }
    }
