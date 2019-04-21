import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    //create a reference and assign it to an instance variable we can use in our class
    this.imageRef = React.createRef();
  }

  componentDidMount(){
      console.log(this.imageRef);

      //why is clientHeight 0 at this point?
      //Because as soon as component is rendered not all images have been loaded.
      //Not from the API, but from the actual image URL
      console.log(this.imageRef.current.clientHeight);
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
