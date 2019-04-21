import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

// refactor App function into class based component so it can have some function it can
// take and pass down into the SearchBar component
class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 4350aad5e239db395b9a15b70618b7adbde58196ac64bbdec7c8af1c5f0ae895"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
