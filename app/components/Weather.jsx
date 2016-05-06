var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false,

    }
  },
  render: function(){
    var that = this;
    var {isLoading, errorMessage, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3 className="text-center">Fetching weather...</h3>;
      }
      else if(temp && location){
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    function renderErrorModal(){
      if(typeof errorMessage === "string"){
        return <ErrorModal message={errorMessage} />;
      }
    }

    return(
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderErrorModal()}
      </div>
    );
  },
  handleSearch: function(location){
    var that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    OpenWeatherMap.getTemperature(location)
      .then(
        function(result){
          that.setState({
            isLoading: false,
            location: location,
            temp: result
          });
        },
        function(error){
          that.setState({
            isLoading: false,
            errorMessage: error.message
          });
      });
    }
});
