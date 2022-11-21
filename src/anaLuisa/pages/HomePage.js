import React from "react";

import Header from "../components/Header/Header.view";
import Posts from "../components/Posts/Posts";

import { StyledHomePage } from "./StyledHomePage";

export default function HomePage() {
  return (
    <StyledHomePage>
      <Header />
      <Posts />
    </StyledHomePage>
  );
}
