SurveyEngine.Routers.SurveyEngineRouter = Backbone.Router.extend({
  initialize: function(options){
    debugger
    this.collection = SurveyEngine.Collections.survey;
    this.$rootEl = options.$rootEl;
  },

  routes: {
    ":default": "root",
  },

  root: function(){
    var view = new SurveyEngine.Views.SurveyEngine({});
    this._swapView(view);
  },

  _swapView: function (view) {
    this._view && this._view.remove();
    this._view = view;
    this.$rootEl.html(this._view.render().$el);
  },
});
