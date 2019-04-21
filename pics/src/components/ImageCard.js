import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //create a reference and assign it to an instance variable we can use in our class
    this.imageRef = React.createRef();
  }

  render() {
    const { description, urls } = this.props.image;
    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
