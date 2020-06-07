
  package runner;
  
  import org.junit.runner.RunWith;
  
  import cucumber.api.CucumberOptions; import cucumber.api.junit.Cucumber;
  
  @RunWith(Cucumber.class)
  
  @CucumberOptions (
  features="D:/eclipseworkspace1/Mavendemo/src/main/java/feature", 
  glue={"stepdef"},
  format = {"pretty", "html:Output-folder","json:json_folder"}, //strict = true,
  dryRun=false 
  )
  public class Testrunner_googlesearch {
  
  
  
  
  }
 