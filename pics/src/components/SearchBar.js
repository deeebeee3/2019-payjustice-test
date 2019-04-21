import React from "react";

class SearchBar extends React.Component {

  state = { term: "" };

    onFormSubmit(event){
        //stop default behaviour of submitting form and refreshing page when clicking enter and focus is on a field
        event.preventDefault();

        //'this' is equal to undefined at this point
        console.log(this.state.term);

    }

  render() {
    return (
      <div className="ui segment">

        {/* when the callback is invoked in the future there will be no this.onFormSubmit,
        there will be no "searchbar.onFormSubmit", the form will rip the callback off 
        whatever object it shows up as and calls it on its own like: onFormSubmit(), not
        this.onFormSubmit or searchbar.onFormSubmit. So.. it has no context */}
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
