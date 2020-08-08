import React from "react";
import "./App.scss";
import { useRedditPage } from "./services/PostProvider";
import PostHeader from "./components/PostHeader/PostHeader";
import PostContent from "./components/PostContent/PostContent";
import CommentList from "./components/CommentList/CommentList";

function App() {
  const { comments, post } = useRedditPage();
  const topLevelComments = comments.filter(({ parent_id }) => !parent_id);

  return (
    <div className="body">
      <PostHeader
        subreddit={post.subreddit_name_prefixed}
        title={post.title}
        upvote={post.ups}
      />
      <div className="post-container">
        <section>
          <PostContent
            bodyHTML={post.selftext_html}
            commentCount={comments.length}
          />
        </section>
        <section className="comments-container">
          <CommentList comments={topLevelComments} />
        </section>
      </div>
    </div>
  );
}

export default App;
