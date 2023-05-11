import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Post from "./post";
import PostsList from "./postsList";
// import query from "query-string";
// import _ from "lodash";

const Posts = () => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  const params = useParams();

  const { postId } = params;
  // const search = query.parse(location.search);
  // const cropPosts = search.count
  //   ? _(posts).slice(0).take(search.count).value()
  //   : posts;

  return (
    <>
      {postId ? (
        <Post posts={posts} id={postId} />
      ) : (
        <PostsList posts={posts} />
      )}
    </>
  );
};

export default Posts;
