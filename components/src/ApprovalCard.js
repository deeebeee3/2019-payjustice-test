// Import the React library
import React from "react";

// Create a react component (function based)
const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">Are you sure?</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
