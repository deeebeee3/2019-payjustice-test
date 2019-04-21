import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
