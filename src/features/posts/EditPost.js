import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { editPost } from "../../api/postSlice"
import TextArea from "../../components/textarea"
import TextField from "../../components/textfield"

const EditPost = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  
  const currentPost = posts.filter(post=>post.id === Number(params.id))
  const { userId, title, body } = currentPost[0]
 
  const [values, setValues] = useState({
    userId,
    title,
    body
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues({title:'',body:''})
    const data = {
      userId: values.userId,
      id: params.id,
      title: values.title,
      body: values.body
    }
    dispatch(editPost({data}))
    navigate('/')
  }

  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-center">
      <h1 className="font-bold text-center border border-slate-200 bg-slate-600 mb-4 py-4 text-white">Edit your post</h1>
      <TextField
        placeholder={"Update title of post"}
        label={"Title"}
        id={"title"}
        value={values.title}
        onChange={(e)=>setValues({
          ...values,
          title: e.target.value
        })}
      />
      <TextArea
        placeholder={"Update body of post"}
        label={"Post"}
        onKeydown={handleKeyDown}
        id={"body"}
        value={values.body}
        onChange={(e)=>setValues({
          ...values,
          body: e.target.value
        })}
      />
      <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2">Submit</button>
    </form>
  ) 
}

export default EditPost