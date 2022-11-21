import React, { useEffect, useState, useRef } from "react";

import { postsService } from "../../service";

import PostsView from "./Posts.view";

import { lowToHigh, highToLow, earliest, latest } from "../../utils/sort";

import {
  SORT_BY_LIKES_ASC,
  SORT_BY_LIKES_DESC,
  SORT_BY_DATE_DESC,
  SORT_BY_DATE_ASC,
} from "../../constants";

const SCROLL_OFF_TIMEOUT = 300;

const getCompFunction = (sortBy) => {
  switch (sortBy) {
    case SORT_BY_DATE_ASC:
      return earliest;
    case SORT_BY_DATE_DESC:
      return latest;
    case SORT_BY_LIKES_ASC:
      return lowToHigh;
    case SORT_BY_LIKES_DESC:
      return highToLow;
    default:
      return latest;
  }
};

export default function Posts() {
  const [sort, setSort] = useState("");
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [lastLoadedPage, setLastLoadedPage] = useState(-1);

  const [searchPost, setSearchPost] = useState("");
  const [sortBy, setSortBy] = useState(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  const handleSearchValue = (searchValue) => {
    setSearchPost(searchValue);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applySortBy([...posts]);
  }, [sortBy]);

  const onScroll = () => {
    if (!isScrolling) {
      setIsScrolling(true);
    }

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, SCROLL_OFF_TIMEOUT);
  };

  const applySortBy = (list) => {
    list.sort(getCompFunction(sortBy));
    setPosts(list);
  };

  const fetchData = async () => {
    const { data, total, page } = await postsService.findPosts(
      lastLoadedPage + 1
    );

    const updatedPosts = [...posts, ...data];
    applySortBy(updatedPosts);

    if (updatedPosts.length === total) {
      setHasMore(false);
    }
    setLastLoadedPage(page);
  };

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <PostsView
      fetchData={fetchData}
      hasMore={hasMore}
      sort={sort}
      posts={posts}
      handleChange={handleChange}
      handleSearchValue={handleSearchValue}
      searchPost={searchPost}
      sortBy={sortBy}
      setSortBy={setSortBy}
      isScrolling={isScrolling}
      handleScroll={onScroll}
    />
  );
}
