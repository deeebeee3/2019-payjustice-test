import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //create a reference and assign it to an instance variable we can use in our class
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    //listen for image load successful event
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  //use the image height to set the span for grid-row-end css
  //context will be lost so make sure setSpan defined using an arrow function
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };

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
