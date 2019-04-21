import React from "react";
import SearchBar from "./SearchBar";

// refactor App function into class based component so it can have some function it can
// take and pass down into the SearchBar component
class App extends React.Component {

  onSearchSubmit(term){
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={ this.onSearchSubmit }/>
      </div>
    );
  }
}

export default App;
