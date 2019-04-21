import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {

  //expecting an array from request so use an empty array as default value
  //also can check for array length. If used null, map would give an error message, and length too
  state = { images: [] };



  async onSearchSubmit(term) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 4350aad5e239db395b9a15b70618b7adbde58196ac64bbdec7c8af1c5f0ae895"
      }
    });

    //after get response - set state with images and cause component to rerender
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
