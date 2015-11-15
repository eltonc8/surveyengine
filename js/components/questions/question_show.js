var QuestionShow = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    var input, question = this.props.question;
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

    return (
      <li>
        <h5 className="question-stem">{this.props.number} {this.props.question.stem} </h5>

        <div className="question-answer">
          {input}
        </div>
      </li>
    )
  },
});
