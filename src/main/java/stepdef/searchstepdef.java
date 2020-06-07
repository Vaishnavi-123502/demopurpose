
  package stepdef;
  
  import java.util.concurrent.TimeUnit;
  
  import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; 
  import org.openqa.selenium.chrome.ChromeDriver;
  
  import cucumber.api.java.en.Given; import cucumber.api.java.en.Then;
  import junit.framework.Assert;
  
  public class searchstepdef {
  
  WebDriver driver=null;
  
  @Given("^User is on search page$") public void user_is_on_search_page() {
  System.setProperty("webdriver.chrome.driver",
  "D:\\eclipseworkspace1\\sseleniumdemo\\driver\\chromedriver.exe"); driver=new
  ChromeDriver(); driver.manage().window().maximize();
  driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  driver.get("https:\\www.google.com"); }
  
  @SuppressWarnings("deprecation")
  
  @Then("^Verify the title in search page$") public void
  verify_the_title_in_search_page() throws Throwable { String
  title=driver.getTitle(); System.out.println(title);
  Assert.assertEquals("Google", title);
  
  }
  
  @Then("^Give the \"([^\\\"]*)\" to search$")
  public void give_the_keyword_to_search(String keyword) throws Throwable {
  driver.findElement(By.xpath("//input[@name='q']")).sendKeys(keyword);
  
  }
  
  @Then("^Choose the option from dropdown$") 
  public void choose_the_option_from_dropdown() throws Throwable {
  //driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  driver.findElement(By.xpath(
  "(//div[@id='tophf']/following-sibling::div//span[text()='orange'])[1]")).
  click();;
  
  }
  
  //@Then("^click on Search option$") public void click_on_Search_option() throws
 // Throwable { driver.quit();
  
 // }
  
  
  
  }
  
 