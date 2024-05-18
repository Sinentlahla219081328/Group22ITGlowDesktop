package za.ac.cput.factory;

import org.junit.jupiter.api.Test;
import za.ac.cput.domain.Employee;
import za.ac.cput.domain.Sales;

import static org.junit.jupiter.api.Assertions.*;

class SalesFactoryTest {

    @Test
    void createSales() {


            Sales sales = SalesFactory.createSales("S123", "E123", "Haircut Service");
            assertNotNull(sales);
            System.out.println(sales.toString());

    }
}