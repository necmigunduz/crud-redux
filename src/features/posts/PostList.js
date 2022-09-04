import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostCard from "../../components/postCard";
import { getPosts } from "../../api/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  },[dispatch] );
 
  if (loading) return <p>Loading...</p>;
  if (posts.length === 0 && !loading) return <p>Something went wrong!</p>
  return (
    <div className="mx-8 my-8">
    <div>
      <h1 className="text-3xl font-bold underline">Posts by User</h1>
    </div>
    <div className="flex m-8">
      <Link to='/create-post'><p className="p-2 text-blue-400">
        Click here to create a new post
      </p></Link>
    </div>
    <div className="grid md:grid-cols-4">
      {
        [...posts].reverse().map(post=> <PostCard key={post.id} title={post.title} body={post.body} id={post.id} />)
      }
    </div>   
  </div>
  );
};

export default PostList;

