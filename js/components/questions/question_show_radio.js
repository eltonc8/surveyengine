var QuestionShowRadio = React.createClass({
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
            <input type="radio" name={name} value="{choice}">
              {choice}
            </input>
          )
        })
      }
      </div>
    )
  },
});
