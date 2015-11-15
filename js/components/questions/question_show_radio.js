var QuestionShowRadio = React.createClass({
  getInitialState: function(){
    return {};
  },

  handleClick: function(event){
    var value = event.currentTarget.value;
    this.props.question.response = value;
  },

  render: function(){
    var name = this.props.question.stem,
      response = this.props.question.response,
      handleClick = this.handleClick;

    return (
      <div>
      {
        this.props.question.choices.map(function(choice){
          var defaultChecked = choice == response;
          return (
            <input type="radio" name={name} value={choice}
              defaultChecked={defaultChecked}
              onClick={handleClick}>
              {choice}
            </input>
          )
        })
      }
      </div>
    )
  },
});
