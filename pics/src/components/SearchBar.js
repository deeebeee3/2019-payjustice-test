import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit(event) {
    event.preventDefault();

    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        {/* wrap onFormSubmit callback with an arrow function and pass to onSubmit prop.
         Add parentheses to onFormSubmit() to make sure it is invoked whenever arrow function called */}
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
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
