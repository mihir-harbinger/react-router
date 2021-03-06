var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//top level components
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//load custom css
require('style!css!sass!AppCss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather} />
      <Route path="about" component={About} />
      <Route path="example" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
