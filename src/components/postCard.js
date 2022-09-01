import { useDispatch } from "react-redux";
import { deletePost } from "../api/postSlice";

const PostCard = ({title,body,id}) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deletePost({id: id}))
  }
  return (
    <div className="p-3 mx-2 my-2 max-w-sm rounded-xl border border-gray-200 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600">
      <h5 className="mb-2 text-xl text-right font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-right">
        {body}
      </p>
      <div className="text-center">
        <button type="button" className="mx-2 focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Edit</button>
        <button type="button" onClick={()=>handleDelete(id)} className="mx-2 focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
