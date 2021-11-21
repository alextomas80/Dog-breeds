import styled from "styled-components";

export const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Dog = styled.a`
  background-image: url(${({ src }) => src});
  background-position: center center;
  background-size: cover;
  border-radius: 2px;
  border: 3px solid lightgrey;
  height: 150px;
`;
