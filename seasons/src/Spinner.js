import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.loadingMsg}</div>
    </div>
  );
};

Spinner.defaultProps = {
  loadingMsg: 'Loading...'
};

export default Spinner;
