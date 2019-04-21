import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Fix undefined 'this' issue by using an arrow function instead of a old style functions:
  //function onFormSubmit(){...} / onFormSubmit(){...} 
  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
