import React from "react";

const ImageList = props => {
  //use map to create an array of img tags
  const images = props.images.map(image => {
    return <img src={image.urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
