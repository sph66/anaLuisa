import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid";

import Post from "../Post";

import { sortList } from "../../constants";

import {
  StyledPostsView,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "./StyledPostsView";
import DropDown from "../DropDown/DropDown";

export default function PostsView({
  fetchData,
  hasMore,
  posts,
  handleSearchValue,
  searchPost,
  sortBy,
  setSortBy,
  isScrolling,
  handleScroll,
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <StyledPostsView>
      {(!isScrolling || isSearchFocused) && (
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="SEARCH"
            inputProps={{ "aria-label": "search" }}
            value={searchPost}
            onChange={(e) => {
              handleSearchValue(e.target.value);
            }}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </Search>
      )}
      <Grid container>
        <Grid item xs={12} sm={6} className="post-title-desktop">
          <div className="posts-title">
            <h3>Posts</h3>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className="dropdown-container">
          <DropDown sortList={sortList} sortBy={sortBy} setSortBy={setSortBy} />
        </Grid>
        <Grid item xs={12} sm={6} className="post-title-mobile">
          <div className="posts-title">
            <h3>Posts</h3>
          </div>
        </Grid>
      </Grid>

      <div className="infinite-scroll-container">
        <div id="scroll-target" className="posts" onScroll={handleScroll}>
          <InfiniteScroll
            scrollableTarget="scroll-target"
            dataLength={posts.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Grid container spacing={1}>
              {posts
                .filter((post) => {
                  return (
                    post.owner.lastName.indexOf(searchPost) !== -1 ||
                    post.text.indexOf(searchPost) !== -1 ||
                    post.owner.firstName.indexOf(searchPost) !== -1
                  );
                })
                .map((post) => {
                  return (
                    <Grid item xs={6} md={4} key={post.id}>
                      <Post post={post} />
                    </Grid>
                  );
                })}
            </Grid>
          </InfiniteScroll>
        </div>
      </div>
    </StyledPostsView>
  );
}
