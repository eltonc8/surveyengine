var QuestionShowDropdown = React.createClass({
  getInitialState: function(){
    return {};
  },

  handleChange: function(event){
    var value = event.currentTarget.value;
    this.props.question.response = value;
  },

  render: function(){
    var choices = [["", "choose one"]],
      response = this.props.question.response;

    _.each(this.props.question.choices, function(choice){
      choices.push([choice, choice]);
    });

    return (
      <select name="{this.props.question.stem}" onChange={this.handleChange}
        defaultValue={response}>
      {
        choices.map(function(choice_pair){
          return (
            <option value={choice_pair[0]}>
              { choice_pair[1] }
            </option>
          )
        })
      }
      </select>
    )
  },
});

//{ choice_pair[0] == response + 1 ? "selected" : "" }
