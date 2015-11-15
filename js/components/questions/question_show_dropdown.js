var QuestionShowDropdown = React.createClass({
  getInitialState: function(){
    return {};
  },

  render: function(){
    var choices = [["", "choose one"]],
      response = this.props.requestion.response;

    _.each(this.props.question.choices, function(choice){
      choices.push([choice, choice]);
    });

    return (
      <select name="{this.props.question.stem}">
      {
        choices.map(function(choice_pair, idx){
          return (
            <option value="{choice_pair[0]}" >
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
