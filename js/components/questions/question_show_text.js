var QuestionShowText = React.createClass({
  getInitialState: function(){
    return {};
  },

  handleChange: function(event){
    var response = event.currentTarget.value;
    this.props.question.response = response;
    this.setState({});
  },

  render: function(){
    var name = this.props.question.stem;

    return (
      <div>
      {
        <input className="question-input" type="text" name={this.props.question.stem}
          onChange={this.handleChange} value={this.props.question.response}/>
      }
      </div>
    )
  },
});
