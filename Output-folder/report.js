$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("googlesearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search for a particular keyword in eclipse",
  "description": "",
  "id": "google-search;search-for-a-particular-keyword-in-eclipse",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the title in search page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Give the \"\u003ckeyword\u003e\" to search",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Choose the option from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on Search option",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "google-search;search-for-a-particular-keyword-in-eclipse;",
  "rows": [
    {
      "cells": [
        "keyword"
      ],
      "line": 12,
      "id": "google-search;search-for-a-particular-keyword-in-eclipse;;1"
    },
    {
      "cells": [
        "orange"
      ],
      "line": 13,
      "id": "google-search;search-for-a-particular-keyword-in-eclipse;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Search for a particular keyword in eclipse",
  "description": "",
  "id": "google-search;search-for-a-particular-keyword-in-eclipse;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on search page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Verify the title in search page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Give the \"orange\" to search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Choose the option from dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on Search option",
  "keyword": "Then "
});
formatter.match({
  "location": "searchstepdef.user_is_on_search_page()"
});
formatter.result({
  "duration": 14601483200,
  "status": "passed"
});
formatter.match({
  "location": "searchstepdef.verify_the_title_in_search_page()"
});
formatter.result({
  "duration": 16249400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 10
    }
  ],
  "location": "searchstepdef.give_the_keyword_to_search(String)"
});
formatter.result({
  "duration": 257820400,
  "status": "passed"
});
formatter.match({
  "location": "searchstepdef.choose_the_option_from_dropdown()"
});
formatter.result({
  "duration": 4487101300,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});