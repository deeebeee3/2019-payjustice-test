import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            
            {/* onInputChange is a callback function - dont use parentheses - dont want to execute on render */}
            <input type="text" onChange={this.onInputChange} />

            {/* alternate way */}
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
