import styled from "styled-components";

export const CardBoxContainer = styled.div`
  display: flex;
  flex-direction: column;

  .card-container {
    display: flex;
    margin-top: ${(props) => props.theme.spaces.m};
    line-height: 22px;
  }

  .image {
    width: 140px;
    height: 120px;
    margin-right: ${(props) => props.theme.spaces.s};
  }

  .number {
    color: ${(props) => props.theme.colors.grayishBlue};
    font-size: 20px;
    font-weight: 800;
  }

  .title {
    color: ${(props) => props.theme.colors.veryDarkBlue};
    font-weight: 800;
    padding-top: ${(props) => props.theme.spaces.xs};
    padding-bottom: ${(props) => props.theme.spaces.xs};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme.colors.red};
    }
  }

  .subtitle {
    color: ${(props) => props.theme.colors.darkGrayishBlue};
  }

  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
