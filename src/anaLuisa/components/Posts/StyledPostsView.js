import styled from "styled-components";

import { styled as muiStyled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const StyledPostsView = styled.div`
  margin: auto;

  @media (max-width: 599px) {
    .post-title-mobile {
      display: block;
    }

    .post-title-desktop {
      display: none;
    }
  }

  @media (min-width: 600px) {
    .post-title-mobile {
      display: none;
    }

    .post-title-desktop {
      display: block;
    }
  }

  .content {
    width: 100%;
  }

  .posts-title {
    @media (max-width: 599px) {
      margin-top: 10px;
      padding: 15px;
    }

    h3 {
      font-size: 2.5rem;
      font-weight: 310;
      margin: 0;
      font-family: "Gill Sans", sans-serif;
    }
  }

  .dropdown-container {
    position: relative;
  }

  .infinite-scroll-container {
    margin: auto;
    max-width: 1200px;
  }

  .posts {
    overflow-y: auto;

    @media (min-width: 600px) {
      height: calc(100vh - 234px);
      margin: 20px -10px 0;
    }

    @media (max-width: 599px) {
      height: calc(100vh - 278px);
    }
  }
`;

export const Search = muiStyled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 0,
  backgroundColor: alpha(theme.palette.secondary.contrastText, 0),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.light, 0.08),
  },
  marginLeft: 0,
  border: "1px solid",

  [theme.breakpoints.up("sm")]: {
    margin: `0 ${theme.spacing(0)}`,
    width: "100%",
    "margin-bottom": 30,
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 15px",
    "margin-bottom": 40,
  },
}));

export const SearchIconWrapper = muiStyled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = muiStyled(InputBase)(({ theme }) => ({
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    height: 35,
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100ch",
      "&:focus": {
        width: "100ch",
      },
    },
  },
}));
