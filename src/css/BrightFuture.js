import styled from "styled-components";

export const BrightFutureContainer = styled.div`
  width: 100%;

  .heading {
    color: ${(props) => props.theme.colors.veryDarkBlue};
    font-weight: 800;
    margin-bottom: 0;
    margin-left: 0;
    font-size: 30px;
  }

  .subtitle {
    color: ${(props) => props.theme.colors.darkGrayishBlue};
  }

  .btn {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.offWhite};
    background-color: ${(props) => props.theme.colors.red};
    outline: none;
    border: none;
    padding: ${(props) => props.theme.spaces.s};
    letter-spacing: 4px;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.veryDarkBlue};
    }
  }

  @media (min-width: 1440px) {
    margin-right: ${(props) => props.theme.spaces.m};
    .flex-container {
      display: flex;
    }

    .heading {
      margin-right: ${(props) => props.theme.spaces.xxl};
      margin-top: 10px;
      font-size: 40px;
    }

    .btn {
      margin-top: 18px;
    }
  }
`;
