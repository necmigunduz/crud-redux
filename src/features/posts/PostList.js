import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../../components/postCard";
import { getPosts } from "../../api/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (posts.length === 0 && !loading) return <p>Something went wrong!</p>
  return (
    <div className="mx-8 my-8">
    <div>
      <h1 className="text-3xl font-bold underline">Posts by User</h1>
    </div>
    <div className="flex m-8">
      <button className="border-2 p-2 border-slate-800 bg-slate-700 text-white rounded-full m-2 font-bold">
        Create a new post
      </button>
    </div>
    <div className="grid md:grid-cols-4">
      {
        posts.map(post=> <PostCard key={post.id} title={post.title} body={post.body} id={post.id} />)
      }
    </div>   
  </div>
  );
};

export default PostList;

