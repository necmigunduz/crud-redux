import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "../../components/postCard";
import { getPosts } from "../../api/postSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.posts);
  console.log(entities)
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (entities.length === 0 && !loading) return <p>Something went wrong!</p>
  return (
    <div className="mx-8 my-8">
    <div>
      <h1 className="text-3xl font-bold underline">Posts by User</h1>
    </div>
    <div className="flex m-8">
      <div>
        <button className="border-2 p-2 border-slate-800 bg-slate-700 text-white rounded-full m-2 font-bold">
          Create a new post
        </button>
      </div>
    </div>
    <div className="grid md:grid-cols-4">
      {
        entities.map(post=> <PostCard key={post.id} title={post.title} body={post.body} />)
      }
    </div>   
  </div>
  );
};

export default PostList;

//   return (
//     <div className="mx-8 my-8">
//       <div>
//         <h1 className="text-3xl font-bold underline">Posts by User</h1>
//       </div>
//       <div className="flex m-8">
//         <div>
//           <button className="border-2 border-slate-800 p-2 bg-slate-700 text-white rounded-full m-2 font-bold">
//             Load posts
//           </button>
//         </div>
//         <div>
//           <button className="border-2 p-2 border-slate-800 bg-slate-700 text-white rounded-full m-2 font-bold">
//             Create a new post
//           </button>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-4">
//         {
//           Posts.map(post=> <PostCard key={post.id} title={post.title} body={post.body} />)
//         }
//       </div>
//     </div>
//   );
// };
