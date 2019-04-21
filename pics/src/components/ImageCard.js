import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef(); //step 1
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans); //step 3
  }

  //use the image height to set the span for grid-row-end css
  //context will be lost ('this' is undefined) so make sure setSpan defined using an arrow function
  setSpans = () => {
    //steps 4
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ spans: spans });
  };

  render() {
    const { description, urls } = this.props.image;

    return (
      // step 5
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* step 2 */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
