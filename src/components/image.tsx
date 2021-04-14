import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  height: 400px;
  text-align: center;

  img {
    width: auto;
    max-width: 400px;
    height: auto;
    max-height: 400px;
    padding: 5px;
  }
`;

interface Props {
  caption: string;
  imageName: string;
}

export const Image: React.FC<Props> = ({ caption, imageName }) => (
  <ImageWrapper>
    <img
      src={`${imageName}-small.png`}
      alt={caption}
      srcSet={`${imageName}-small.png 500w,
        ${imageName}-medium.png 800w,
        ${imageName}-large.png 1000w`}
    />
    <p>{caption}</p>
  </ImageWrapper>
);
