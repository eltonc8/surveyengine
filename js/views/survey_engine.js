SurveyEngine.Views.SurveyEngine = Backbone.View.extend({
  template: JST["root/root"],

  render: function(){
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
