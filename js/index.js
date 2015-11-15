function insertScript(fileName){
  var script = $("<script>").attr("src", fileName);
  $("#scripts").append(script);
}

// utilities
insertScript("js/utils/underscore-min.js");
insertScript("js/utils/backbone-min.js");
insertScript("js/utils/react-0.13.3.js");
insertScript("js/utils/JSXTransformer-0.13.3.js");

// application specific
insertScript("js/survey_engine.js");

// backbone components
insertScript("js/models/survey_question.js");
insertScript("js/collections/survey_questions.js");


// react components
