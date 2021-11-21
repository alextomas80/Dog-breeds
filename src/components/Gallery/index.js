import React from "react";
import { GalleryContainer, Dog } from "./Gallery.styled";

import withImages from "hoc/withImages";

const Gallery = ({ images }) => {
  return (
    <>
      <h3>Galería de imágenes</h3>
      <GalleryContainer>
        {images.map((image, index) => (
          <Dog key={index} src={image} href={image} target="_blank" />
        ))}
      </GalleryContainer>
    </>
  );
};

export default withImages(Gallery);
