import React from "react";

const ImageList = props => {
  //use map to create an array of img tags
  const images = props.images.map(image => {
    //when rendering lists - the root tag should have a unique key property
    //so if img was wrapped in a div - the key property should be on the div tag and not the img
    return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;
