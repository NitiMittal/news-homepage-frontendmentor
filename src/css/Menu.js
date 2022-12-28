import styled from "styled-components";

export const MenuContainer = styled.div`
  .main-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    position: relative;
  }

  .logo {
    width: 35px;
    height: 25px;
    cursor: pointer;
  }

  .hamburger {
    width: 25px;
    height: 15px;
    cursor: pointer;
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .menu {
    width: 70%;
    height: 100%;
    box-shadow: 5px 10px 18px #888888;
    z-index: 999;
    background-color: ${(props) => props.theme.colors.offWhite};
    transition: all 0.15s linear 0s;
    position: absolute;
    top: 0;
    right: 0;
  }

  a {
    color: ${(props) => props.theme.colors.veryDarkBlue};
    text-decoration: none;

    :hover {
      color: ${(props) => props.theme.colors.red};
    }
  }

  .close {
    float: right;
    padding-top: ${(props) => props.theme.spaces.m};
    padding-right: ${(props) => props.theme.spaces.m};
  }
  
  .mobile-menu {
    .home {
      padding-top: ${(props) => props.theme.spaces.xxl};
    }

    li {
      list-style: none;
      padding: ${(props) => `${props.theme.spaces.s} ${props.theme.spaces.xs}`};
      color: ${(props) => props.theme.colors.veryDarkBlue};
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
  }

  .desktop-menu {
    display: flex;

    li {
      list-style: none;
      :not(:last-child) {
        padding-right: ${(props) => props.theme.spaces.xxl};
      }
    }
  }
`;
