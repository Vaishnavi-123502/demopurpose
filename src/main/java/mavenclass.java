import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class mavenclass {

	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "D:\\eclipseworkspace1\\sseleniumdemo\\driver\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		driver.get("https:\\www.google.com");
		driver.findElement(By.xpath("//input[@name='q']")).sendKeys("apple");;
		driver.close();

	}

}
