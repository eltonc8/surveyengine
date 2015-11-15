function getScript(fileName){
  var script = $("<script>").attr("src", fileName);
  $("#scripts").append(script);
}

// utilities
getScript("js/utils/underscore-min.js");
getScript("js/utils/backbone-min.js");

// application specific
getScript("js/survey_engine.js");

// templates
getScript("js/templates/survey/survey.js");

// components
getScript("js/views/survey_engine.js");
getScript("js/routers/survey_engine_router.js");
