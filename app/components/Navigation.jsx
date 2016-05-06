var React = require('react');
var {Link, IndexLink} = require('react-router');

module.exports = (props) => {
  return(
    <div>
      <h2>Navigation Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
      <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
      <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
    </div>
  );
};