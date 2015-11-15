var SurveyActive = React.createClass({
  getInitialState: function(){
    return {
      status: "please fill out the following information"
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    console.log(event.currentTarget)
    this.setState({status: "successfully submitted"});
  },

  render: function(){
    var list = SurveyEngine.Collections.surveyQuestions;

    return (
      <div>
        <h4>Survey</h4>
        <p>{this.state.status}</p>

        <form>
          <ul className="survey-active">
          {
            list.map(function(question, idx){
              return (<QuestionShow question={question} number={idx + 1}/>)
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
