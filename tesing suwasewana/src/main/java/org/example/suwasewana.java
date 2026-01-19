package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class suwasewana {
    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");

        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(15));

        try {
            // 1go to website
            driver.get("https://suwasewana-vgqa.vercel.app/");
            driver.manage().window().maximize();

            // 2. Create Account
            WebElement navCreateBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[contains(text(),'Create Account')]")));
            navCreateBtn.click();

            // 3. Form Fill 
            String email = "sadu" + System.currentTimeMillis() + "@gmail.com";
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/form/div/div[1]/input"))).sendKeys("vindya");
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/div/div[2]/input")).sendKeys(email);
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/div/div[3]/input")).sendKeys("Password@sadu");
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/div/button")).click();
            System.out.println("✅ Account creation submitted!");

            // 4. Book Appointment Click 
            WebElement bookAppointmentBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[1]/div[1]/a")));
            bookAppointmentBtn.click();

            // 5. Doctor selection
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h1[contains(text(),'Doctors')] | //p[contains(text(),'doctors')]")));
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[3]/div/div[1]/img")).click();
            System.out.println("✅ Selected a doctor.");

            // 6. select date and time
            Thread.sleep(3000);
            wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div[1]/div[4]"))).click();
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/div[2]/p[2]")).click();

            // 7. Booking Confirm
            WebElement finalBookBtn = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div[2]/div[2]/button"));
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", finalBookBtn);
            Thread.sleep(1000);
            finalBookBtn.click();
            System.out.println("✅ Appointment booked successfully!");

            // 8. go  My Appointments page
            Thread.sleep(2000);
            driver.get("https://suwasewana-vgqa.vercel.app/my-appointments");
            System.out.println("✅ Navigated to My Appointments.");

            // 9. to check Appointment and cancel
            WebElement cancelBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//button[contains(text(),'Cancel')])[1]")));

            if (cancelBtn.isDisplayed()) {
                System.out.println("✅ Verification Successful: Appointment found.");

                // Cancel 
                ((JavascriptExecutor) driver).executeScript("arguments[0].click();", cancelBtn);
                System.out.println("✅ Appointment cancel button clicked.");

                // 10.to check status is cancel
                WebElement status = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[contains(text(),'Cancelled') or contains(text(),'cancelled')]")));
                System.out.println("✅ TEST PASSED: Status is " + status.getText());
            }

            Thread.sleep(3000);

        } catch (Exception e) {
            System.out.println("❌ ගැටලුවක් පැන නැගුණා: " + e.getMessage());
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }

}
