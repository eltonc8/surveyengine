var QuestionShowDropdown = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    return (
      <select name="{this.props.question.stem}">
      {
        this.props.question.choices.map(function(choice){
          return (
            <option value="{choice}">
              {choice}
            </option>
          )
        })
      }
      </select>
    )
  },
});
