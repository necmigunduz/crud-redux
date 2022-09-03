import TextArea from "../../components/textarea"
import TextField from "../../components/textfield"

const EditPost = () => {
  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  return (
    <form className="flex flex-col text-center">
      <h1 className="font-bold text-center border border-slate-200 bg-slate-600 mb-4 py-4 text-white">Edit your post</h1>
      <TextField
        placeholder={"Update title of post"}
        label={"Title"}
        id={"title"}
      />
      <TextArea
        placeholder={"Update body of post"}
        label={"Post"}
        onKeydown={handleKeyDown}
        id={"body"}
      />
      <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Submit</button>
    </form>
  ) 
}

export default EditPost