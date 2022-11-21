import styled from "styled-components";

export const StyledHeaderView = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 599px) {
    padding: 15px 15px 10px;
  }

  div {
    margin-bottom: 20px;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
  }
`;
