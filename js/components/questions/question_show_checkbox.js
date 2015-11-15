var QuestionShowCheckbox = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    var name = this.props.question.stem,
      response = this.props.question.response;

    return (
      <div>
      {
        this.props.question.choices.map(function(choice, idx){
          return (
            <input type="checkbox" name={name} value="{choice}" defaultChecked={response.indexOf(choice) >= 0}>
              {choice}
            </input>
          );
        })
      }
      </div>
    )
  },
});
//{}
