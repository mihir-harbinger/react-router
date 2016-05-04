var React = require('react');
var {Link} = require('react-router');

module.exports = React.createClass({
  render: function(){
    return(
      <div>
        <h2>Naviagtion Component</h2>
        <Link to="/" activeClassName="active">Get Weather</Link>
        <Link to="/about">About</Link>
        <Link to="/example">Example</Link>
      </div>
    );
  }
});
