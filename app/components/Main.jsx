var React = require('react');
var Navigation = require('Navigation');

module.exports = (props) => {
  return(
    <div>
      <Navigation />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
}
