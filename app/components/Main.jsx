var React = require('react');
var Navigation = require('Navigation');

module.exports = (props) => {
  return(
    <div>
      <Navigation />
      <h1>Main Component</h1>
      {props.children}
    </div>
  );
}
