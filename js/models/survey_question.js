SurveyEngine.Models.SurveyQuestion = Backbone.Model.extend({
  validates: function(){
    return true;
  }
});

SurveyEngine.Models.TextQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "text",

  initialize: function(){
    this.response = "";
  },

  validates: function(){
    return this.response.length > 0;
  }
});

SurveyEngine.Models.RadioQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "radio",

  initialize: function(){
    this.response = "";
    this.choices = [];
  },

  validates: function(){
    return this.response != "";
  }
});

SurveyEngine.Models.CheckboxQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "checkbox",

  initialize: function(){
    this.response = [];
    this.choices = [];
  }
});

SurveyEngine.Models.DropdownQuestion = SurveyEngine.Models.SurveyQuestion.extend({
  type: "dropdown",

  initialize: function(){
    this.response = "";
    this.choices = [];
  },

  validates: function(){
    return this.response != "";
  }
});
