package org.example;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;

public class login {
    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");

        WebDriver driver = new ChromeDriver(options);
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(20));

        try {
            // 1. වෙබ් අඩවියට පිවිසීම
            driver.get("https://suwasewana-vgqa.vercel.app/login"); // කෙලින්ම Login page එකට යාම පහසුයි
            driver.manage().window().maximize();

            // 2. Login වීම
            System.out.println("Logging in...");
            wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id=\"root\"]/div/form/div/div[1]/input"))).sendKeys("ima@gmail.com");
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/div/div[2]/input")).sendKeys("Password@ima");
            driver.findElement(By.xpath("//*[@id=\"root\"]/div/form/div/button")).click();

            // 3. Profile icon එක හෝ My Appointments වෙත යාම
            // බොහෝ විට Login වූ පසු ඉහළ දකුණු කෙළවරේ ඇති Profile එක මත Click කර 'My Appointments' තෝරාගත යුතුයි
            // නැතිනම් කෙලින්ම URL එක හරහා යා හැකියි
            Thread.sleep(3000);
            driver.get("https://suwasewana-vgqa.vercel.app/my-appointments");
            System.out.println("✅ Navigated to My Appointments.");

            // 4. Appointment එක සොයාගෙන Cancel Button එක Click කිරීම
            // සාමාන්‍යයෙන් ලැයිස්තුවේ ඇති පළමු appointment එකේ 'Cancel appointment' button එක සොයමු
            WebElement cancelBtn = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//button[text()='Cancel appointment'])[1]")));

            // Button එක පෙනෙන තෙක් Scroll කිරීම
            ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", cancelBtn);
            Thread.sleep(1000);

            cancelBtn.click();
            System.out.println("✅ Cancel button clicked.");

            // 5. Confirmation Alert එකක් ආවොත් එය Accept කිරීම (වෙබ් අඩවියේ ආකාරය අනුව)
            try {
                wait.until(ExpectedConditions.alertIsPresent());
                driver.switchTo().alert().accept();
                System.out.println("✅ Confirmation alert accepted.");
            } catch (Exception e) {
                System.out.println("No browser alert found, checking for UI confirmation.");
            }

            // 6. පරීක්ෂාව: Button එක 'Appointment cancelled' ලෙස වෙනස් වී ඇත්දැයි බැලීම
            WebElement statusText = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[text()='Appointment cancelled' or contains(@class, 'text-red-500')]")));
            System.out.println("✅ Status: " + statusText.getText());

            Thread.sleep(5000);

        } catch (Exception e) {
            System.out.println("❌ Error in cancellation: " + e.getMessage());
            e.printStackTrace();
        } finally {
            driver.quit();
        }
    }
}
