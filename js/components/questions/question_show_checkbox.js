var QuestionShowCheckbox = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    var name = this.props.question.stem;
    return (
      <div>
      {
        this.props.question.choices.map(function(choice){
          return (
            <input type="checkbox" name={name} value="{choice}">
              {choice}
            </input>
          )
        })
      }
      </div>
    )
  },
});
