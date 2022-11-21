import styled from "styled-components";

export const StyledPost = styled.div`
  @media (min-width: 600px) {
    margin: 10px;
  }

  .image {
    width: 100%;
    aspect-ratio: 1;
  }
  .image-container {
    background-color: black;
    position: relative;
  }

  .image:hover {
    opacity: 0.5;
  }

  .image:hover + .text-on-hover,
  .image + .text-on-hover:hover {
    display: block;
    pointer-events: none;
  }

  .container-details {
    position: relative;
    padding-right: 50px;
  }

  .author {
    padding: 10px;
  }

  .likes {
    position: relative;
    padding: 15px;

    @media (min-width: 600px) {
      top: 4px;
      right: 5px;
      position: absolute;
    }

    svg {
      height: 20px;
    }

    div {
      position: absolute;

      @media (max-width: 599px) {
        &.icon {
          top: 0;
          left: 8px;
        }

        &.amount {
          top: 2px;
          left: 33px;
          font-size: 14px;
        }
      }

      @media (min-width: 600px) {
        &.icon {
          top: 5px;
          left: -20px;
        }

        &.amount {
          top: 7px;
          left: 5px;
          font-size: 14px;
        }
      }
    }
  }

  .text-on-hover {
    position: absolute;
    top: 170px;
    width: 280px;
    display: none;
    z-index: 9;
    font-size: 1.5rem;
    font-weight: 410;
    margin: 0;
    font-family: "Gill Sans", sans-serif;
    word-wrap: break-word;
    color: white;
    margin-left: 55px;
  }
`;
