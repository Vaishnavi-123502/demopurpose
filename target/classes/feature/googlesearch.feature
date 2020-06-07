Feature: Google search 

Scenario Outline: Search for a particular keyword in eclipse

Given User is on search page
Then Verify the title in search page
Then Give the "<keyword>" to search
Then Choose the option from dropdown
Then click on Search option

Examples:
|keyword|
|orange| 