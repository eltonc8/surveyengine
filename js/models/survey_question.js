SurveyEngine.Models.SurveyQuestion = Backbone.Model.extend({});

SurveyEngine.Models.TextQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "text"
});

SurveyEngine.Models.RadioQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "radio"
});

SurveyEngine.Models.CheckboxQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "checkbox"
});

SurveyEngine.Models.DropdownQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "dropdown"
});
