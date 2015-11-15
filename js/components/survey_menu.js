var SurveyMenu = React.createClass({
  getInitialState: function(){
    return {action: "edit"};
  },

  handleClick: function (event){
    var action = event.currentTarget.getAttribute("data-action")
    this.setState({action: action});
  },

  render: function(){
    return (
      <div>
        <h2>Survey Engine</h2>
        <p></p>

        <ul className="menu">
          <li onClick={this.handleClick} data-action="edit">Edit Mode</li>
          <li onClick={this.handleClick} data-action="active">Active Mode</li>
        </ul>

        <div className="action">
          {this.state.action == "edit" ? <SurveyEdit /> : <SurveyActive />}
        </div>
      </div>
    )
  },
});

React.render(
  <SurveyMenu />,
  document.getElementById('content')
)
