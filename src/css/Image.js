import styled from "styled-components";

export const ImageContainer = styled.div`
  .block-img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1440px) {
    margin-right: ${(props) => props.theme.spaces.m};
    
    .block-img {
      width: 850px;
      height: 400px;
    }
  }
`;
