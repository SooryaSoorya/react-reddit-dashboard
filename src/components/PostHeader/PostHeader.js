import React from "react";
import "./PostHeader.scss";
import formatUpvotes from "../../utils/formatData";

const PostHeader = ({ subreddit, upvote, title }) => {
  return (
    <header className="post-header">
      <a href={`https://reddit.com/${subreddit}`} className="sub-reddit">
        {subreddit}
      </a>
      <div className="post-info">
        <span className="upvotes">{formatUpvotes(upvote)}</span>
        <h1 className="head-title">{title}</h1>
      </div>
    </header>
  );
};

export default PostHeader;
