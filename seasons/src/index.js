import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

    constructor(props){
        //super is a reference to the parents constructor and has to be called
        super(props); 

        this.state = { lat: null };
    }

    // React says we have to define render!
    render(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (error) => console.log(error)
        );

        return(
            <div>Latitude: </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);