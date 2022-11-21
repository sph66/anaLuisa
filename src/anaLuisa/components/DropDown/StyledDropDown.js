import styled from "styled-components";

export const StyledDropDown = styled.div`
  .dropdown {
    position: absolute;
    right: 0px;
    top: 5px;

    @media (max-width: 599px) {
      position: relative;
      top: 0;
      padding: 0 10px;
      width: calc(100vw - 20px);
      background-color: #eee;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
  }

  .content-flexbox {
    position: relative;
    padding: 8px 27px 8px 8px;

    @media (min-width: 600px) {
      width: 220px;
      border: 1px solid;
      padding: 10px 27px 10px 10px;
    }

    .dropdown-value {
      padding-top: 5px;
      text-align: left;

      span {
        color: grey;
        font-size: 13px;
        padding: 0 0 5px 10px;
      }
    }

    .arrow {
      position: absolute;
      right: 5px;
      top: 10px;

      @media (max-width: 599px) {
        right: 0;
      }
    }
  }

  .drop-down-options {
    position: absolute;
    top: 44px;
    left: 0px;
    z-index: 999;
    background-color: white;
    border: 1px solid black;
    width: 237px;
    padding: 10px;

    @media (max-width: 599px) {
      top: 40px;
      border: 1px solid #ddd;
      width: calc(100vw - 17px);
    }

    div {
      padding: 10px;
      font-size: 13px;

      @media (max-width: 599px) {
        padding: 5px 20px;
      }
    }

    .active {
      text-decoration: underline;
    }
  }
`;
