var React = require('react');

module.exports = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React, built for complete developer course.</p>
      <p>Here are some of the tools I have used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - JavaScript Framework
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Weather Data Provider
        </li>
      </ul>
    </div>
  );
};
