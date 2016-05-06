var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

module.exports = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  render: function(){
    var that = this;
    var {isLoading, location, temp} = this.state;

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      }
      else if(temp && location){
        return <WeatherMessage location={location} temp={temp} />;
      }
    }

    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  },
  handleSearch: function(location){
    var that = this;

    this.setState({ isLoading: true });

    OpenWeatherMap.getTemperature(location).then(function(result){
      that.setState({
        isLoading: false,
        location: location,
        temp: result
      })
    }, function(error){
      that.setState({
        isLoading: false
      })
      alert(error);
    })
  }
});