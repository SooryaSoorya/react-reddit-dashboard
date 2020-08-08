import React, { useEffect, useState, useContext, createContext } from "react";
import { API_URL } from "../utils/constant";

export const PostContext = createContext([]);
export const useRedditPage = () => useContext(PostContext);

const PostProvider = ({ children }) => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      await fetch(API_URL)
        .then((result) => result.json())
        .then((result) => {
          const { comments, ...post } = result;
          setComments(comments);
          setPost(post);
        })
        .catch((error) => console.log("catch error", error));
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteComment = (oldCommentId) =>
    setComments(
      comments.map((comment) => {
        if (comment.id === oldCommentId)
          return {
            ...comment,
            isDeleted: true,
            body: "[This comment has been deleted]",
            author: "[deleted]",
            created_utc: new Date().getTime(),
          };
        return comment;
      })
    );

  return (
    <PostContext.Provider value={{ post, comments, deleteComment }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
