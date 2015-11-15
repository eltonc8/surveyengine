var QuestionShow = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    var input, issues, question = this.props.question;
    switch (this.props.question.type) {
      case "radio":
        input = <QuestionShowRadio question={question}/>
        break;
      case "checkbox":
        input = <QuestionShowCheckbox question={question}/>
        break;
      case "dropdown":
        input = <QuestionShowDropdown question={question}/>
        break;
      default:
        input = <QuestionShowText question={question}/>
        break;
    }

    if (this.props.validating && !this.props.question.validates()) {
      issues = (
        <div className="issue">please fill out this field</div>
      )
    }

    return (
      <li>
        <h5 className="question-stem">{this.props.number} {this.props.question.stem} </h5>
        {issues}

        <div className="question-answer">
          {input}
        </div>
      </li>
    )
  },
});
