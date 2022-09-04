import { useDispatch } from "react-redux";
import { createPost } from "../../api/postSlice";
import { useNavigate } from "react-router-dom";
import TextField from "../../components/textfield";
import TextArea from "../../components/textarea";

const CreatePost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    const data = {
      userId: 1,
      title: inputObject.title,
      body: inputObject.body
    }
    dispatch(createPost({data}))
    navigate('/')
  };
  
  const handleKeyDown = (e) => {
    e.target.style.height = "inherit";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <>
      <h1 className="font-bold text-center border border-slate-200 bg-slate-600 mb-4 py-4 text-white">Create a new post</h1>
      <form onSubmit={submitForm} className="flex flex-col text-center">
        <TextField
          label={"Title"}
          id={"title"}
          placeholder={"Enter post title here"}
        />
        <TextArea
          label={"Post"}
          id={"body"}
          placeholder={"Enter your post here"}
          onKeyDown={handleKeyDown}
        />
        <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default CreatePost;
