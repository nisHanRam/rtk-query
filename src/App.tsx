import { useState } from "react";
import { useAddPostMutation, useGetPostsQuery } from "./redux/api";
import PostsCard from "./components/PostsCard";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");

  const [addPost] = useAddPostMutation();

  const postSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost: Post = { id: Math.random() * 1000, title, body };
    addPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <h1>Add Posts</h1>
      <form onSubmit={postSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Posts</h1>
          {/* Here we cannot use: <PostsCard posts={data} /> because data can be undefined and we are expecting an array in the PostsCard component. 
          To resolve this we can use two approaches. Approach-1 => <PostsCard posts={data ?? []} />, or Approach-2 => Is below in the code: */}
          {isSuccess && data && <PostsCard posts={data} />}
        </>
      )}
    </div>
  );
};

export default App;
