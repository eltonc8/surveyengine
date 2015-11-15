var SurveyEdit = React.createClass({
  getInitialState: function(){
    return {};
  },

  handleClick: function (event){
    var newQuestion, addType = event.currentTarget.getAttribute("data-add-type");

    if (addType == "radio") newQuestion = new SurveyEngine.Models.RadioQuestion();
    if (addType == "checkbox") newQuestion = new SurveyEngine.Models.CheckboxQuestion();
    if (addType == "dropdown") newQuestion = new SurveyEngine.Models.DropdownQuestion();
    if (addType == "text") newQuestion = new SurveyEngine.Models.TextQuestion();

    SurveyEngine.Collections.surveyQuestions.add(newQuestion);
    this.setState({});
  },

  render: function(){
    var list = SurveyEngine.Collections.surveyQuestions;

    return (
      <div>
        <h4>Survey Editor</h4>
        <p>Add a question:</p>

        <ul className="question-add">
          <li onClick={this.handleClick} data-add-type="radio">Radio Question</li>
          <li onClick={this.handleClick} data-add-type="checkbox">Checkbox Question</li>
          <li onClick={this.handleClick} data-add-type="dropdown">Dropdown Question</li>
          <li onClick={this.handleClick} data-add-type="text">Text Question</li>
        </ul>

        <ul className="question-edit">
        {
          list.map(function(question, idx){
            return (<QuestionEdit question={question} number={idx + 1}/>)
          })
        }
        </ul>
      </div>
    )
  },
});
