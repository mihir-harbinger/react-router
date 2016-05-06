var React = require('react');

module.exports = ({temp, location}) => {
  return(
    <h3 className="text-center">{"It is " +temp + " in " + location}</h3>
  );
};
