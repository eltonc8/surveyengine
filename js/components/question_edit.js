var QuestionEdit = React.createClass({
  getInitialState: function(){
    return {
      stem: this.props.question.stem,
      choices: this.props.question.type == "text" ? "" : this.props.question.choices && this.props.question.choices.join(", "),
    };
  },

  handleStem: function (event){
    var stem = event.currentTarget.value;
    this.props.question.stem = stem;
    this.setState({stem: stem});
  },

  handleChoices: function (event){
    var choices = event.currentTarget.value;
    this.props.question.choices = choices.split(", ");
    this.setState({choices: choices});
  },

  render: function(){
    if (this.props.question.type != "text") {
      var choices = (
        <div className="choice-input">
          Write question choices for {this.props.type} answers, separated by ', ' [comma, space]
          <br/>
          <input className="stem-input" type="text" value={this.state.choices}
            onChange={this.handleChoices} placeholder="Write the question choices here" />
        </div>
      )
    }

    return (
      <li>
        <h5>{this.props.number} {this.props.question.type} question</h5>

        <div className="question-input">
        Write the question stem
        <br/>
          <input className="stem-input" type="text" value={this.state.stem}
            onChange={this.handleStem} placeholder="Write the question stem here" />
        </div>
        { choices ? choices : ""}
      </li>
    )
  },
});
