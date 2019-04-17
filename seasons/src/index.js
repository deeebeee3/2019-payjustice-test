import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    //super is a reference to the parents constructor and has to be called
    super(props);

    //this is the only time we do direct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: ""
    };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  componentDidMount(){
      console.log('My component was rendered to the screen');
  }

  componentDidUpdate(){
    console.log('My component was just updated - it rerendered');
  }

  // React says we have to define render!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
