import React from "react";

const ImageList = props => {
  //destructure (image) into ({description, id, urls})
  const images = props.images.map(({ description, id, urls }) => {
    //when rendering lists - the root tag should have a unique key property
    //so if img was wrapped in a div - the key property should be on the div tag and not the img
    return (
      <img alt={description} key={id} src={urls.regular} />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
