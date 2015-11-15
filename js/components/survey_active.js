var SurveyActive = React.createClass({
  getInitialState: function(){
    return {
      status: "please fill out the following information",
      validating: false,
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    if ( SurveyEngine.Collections.surveyQuestions.every( function(q){return q.validates() }) ){
      this.setState({validating: true, status: "successfully submitted"});
    } else {
      this.setState({validating: true, status: "there are issues with the form"});
    }
  },

  render: function(){
    var list = SurveyEngine.Collections.surveyQuestions,
        validating = this.state.validating;

    return (
      <div>
        <h4>Survey</h4>
        <p>{this.state.status}</p>

        <form>
          <ul className="survey-active">
          {
            list.map(function(question, idx){
              return (<QuestionShow question={question} validating={validating} number={idx + 1}/>)
            })
          }
          </ul>

          <input className="stem-input" type="submit" value="submit survey"
            onClick={this.handleSubmit}/>

        </form>
      </div>
    )
  },
});
