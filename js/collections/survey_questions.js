SurveyEngine.Collections.SurveyQuestions = Backbone.Collection.extend({
  model: SurveyEngine.Models.SurveyQuestion,
});

SurveyEngine.Collections.surveyQuestions = new SurveyEngine.Collections.SurveyQuestions();
