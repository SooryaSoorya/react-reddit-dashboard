import React from "react";
import deleteImg from "./../../assets/images/delete.svg";
import "./Comment.scss";
import formatUpvotes from "../../utils/formatData";
import formateDate from "../../utils/formatDate";
import CommentList from "../CommentList/CommentList";
import { useRedditPage } from "../../services/PostProvider";

const Comment = ({ id, author, ups, downs, created_utc, isDeleted, body }) => {
  const { comments, deleteComment } = useRedditPage();
  const childComments = comments.filter(({ parent_id }) => parent_id === id);
  const commentLastEdit = new Date(created_utc * 1000);
  const timeAgo = formateDate(commentLastEdit);

  return (
    <>
      <div className="comment-content" id={id}>
        <div className="author-details">
          {isDeleted ? (
            <a target="#" className="author removed">
              {author}
            </a>
          ) : (
            <a href={`https://reddit.com/user/${author}`} className="author">
              {author}
            </a>
          )}
          <span className="upvotes">{formatUpvotes(ups - downs)} points</span> -{" "}
          <span className="time-ago">{timeAgo}</span>
          {isDeleted ? null : (
            <span className="delete" onClick={() => deleteComment(id)}>
              <img className="icon" src={deleteImg} alt="delete"></img>
            </span>
          )}
        </div>
        <div className="comment-content-details">
          <span>{body}</span>
        </div>
      </div>
      <CommentList comments={childComments} className="tree" />
    </>
  );
};

export default Comment;
