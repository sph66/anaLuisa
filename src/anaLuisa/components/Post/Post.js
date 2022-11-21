import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { StyledPost } from "./StyledPost";

export default function Post({ post }) {
  return (
    <StyledPost>
      <div className="image-container">
        <LazyLoadImage className="image" src={post.image} />
        <div className="text-on-hover">{post.text}</div>
      </div>

      <div className="container-details">
        <div className="author">
          {post.owner.firstName ? post.owner.firstName : ""}
          &nbsp;
          {post.owner.lastName ? post.owner.lastName : ""}
        </div>
        <div className="likes">
          <div className="icon">
            <FavoriteIcon />
          </div>
          <div className="amount">{post.likes}</div>
        </div>
      </div>
    </StyledPost>
  );
}
