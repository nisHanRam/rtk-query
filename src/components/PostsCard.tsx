import React from "react";

const PostsCard = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default PostsCard;
