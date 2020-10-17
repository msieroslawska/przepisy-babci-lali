import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  height: 400px;
  text-align: center;

  img {
    height: 100%;
  }
`;

interface Props {
  caption: string;
  imageSource: string;
}

export const Image: React.FC<Props> = ({ caption, imageSource }) => (
  <ImageWrapper>
    <img src={imageSource} alt={caption} />
    <p>{caption}</p>
  </ImageWrapper>
);
