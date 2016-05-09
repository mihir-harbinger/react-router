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
  componentDidMount: function(){
    var location = this.props.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;
    if(location && location.length > 0){
      this.handleSearch(location);
      window.location.hash = '#/';
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
        return <ErrorModal title={'Something went wrong'} message={errorMessage} />;
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
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
      errorMessage: undefined,
      location: undefined,
      temp: undefined
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
