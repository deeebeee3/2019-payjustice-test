// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

// Create a react component (function based)
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          content="Nice blog"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          content="I love it"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 6:00PM"
          content="It's rad dude"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
