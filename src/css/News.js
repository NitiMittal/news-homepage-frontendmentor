import styled from "styled-components";

export const NewsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.veryDarkBlue};
  padding: ${(props) => props.theme.spaces.m};

  h2 {
    color: ${(props) => props.theme.colors.orange};
    margin-top: 0;
    margin-bottom: 0;
  }

  .title {
    color: ${(props) => props.theme.colors.offWhite};
    font-weight: 800;
    padding-top: ${(props) => props.theme.spaces.m};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.colors.orange};
    }
  }

  .subtitle {
    color: ${(props) => props.theme.colors.grayishBlue};
    font-size: 14px;
    padding-top: ${(props) => props.theme.spaces.xs};

    :not(:last-child) {
      border-bottom: 1px solid ${(props) => props.theme.colors.darkGrayishBlue};
      padding-bottom: ${(props) => props.theme.spaces.m};
    }
  }

  @media screen and(min-width: 1440px) {
    width: 279px;
    padding-bottom: ${(props) => props.theme.spaces.xl};
    
    .subtitle {
      padding-top: ${(props) => props.theme.spaces.s};

      :not(:last-child) {
        border-bottom: 1px solid
          ${(props) => props.theme.colors.darkGrayishBlue};
        padding-bottom: ${(props) => props.theme.spaces.l};
      }
    }
  }
`;
