window.SurveyEngine = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    debugger
    SurveyEngine.Routers.router = new SurveyEngine.Routers.SurveyEngineRouter({$rootEl: $("#content")});
    Backbone.history.start();
  }
};

window.JST = {};

$(document).ready(function(){
  SurveyEngine.initialize();
});
