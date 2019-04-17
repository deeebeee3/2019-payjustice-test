// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from './commentDetail';

// Create a react component (function based)
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
