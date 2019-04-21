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
        {/* use bind to return a new version of the callback with 'this' correctly bound,
        the binding could also be done in a constructor function:
        this.onFormSubmit = this.onFormSubmit.bind(this) */}
        <form onSubmit={this.onFormSubmit.bind(this)} className="ui form">
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
