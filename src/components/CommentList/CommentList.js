import React from "react";
import "./CommentList.scss";
import Comment from "../Comment/Comment";

const CommentList = ({ comments = [], className }) => {
  return (
    <div className={`comment-group ${className ? className : ""}`}>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentList;
