import React from "react";
import "./PostContent.scss";
import formatHtml from "../../utils/formatHtml";
import commentImg from "./../../assets/images/comment.svg";

const PostContent = ({ commentCount, bodyHTML }) => {
  const normalizedBody = () => ({ __html: formatHtml(bodyHTML) });

  return (
    <div className="post-content">
      <div className="post-text" dangerouslySetInnerHTML={normalizedBody()} />
      <div className="comment-info">
        <img className="comment-img" src={commentImg} alt="comment" />
        <span className="comment-count">
          {commentCount} <span>Comments</span>
        </span>
      </div>
    </div>
  );
};

export default PostContent;
