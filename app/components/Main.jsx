var React = require('react');
var Navigation = require('Navigation');

module.exports = React.createClass({

  render: function(){
    return(
      <div>
        <Navigation />
        <h1>Main Component</h1>
        {this.props.children}
      </div>
    );
  }
});
