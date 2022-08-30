import { useSelector } from "react-redux";


const PostList = () => {
  const Posts = useSelector((state) => state.posts)
  return (
      <div>
        <div>
          <h1>Posts by User</h1>
        </div>
        <div>
          <div>
            <button>Load posts</button>
          </div>
          <div>
            <button>Create a new post</button>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                Posts.map(({id,userId,title,body}, index)=>(
                  <tr key={index}>
                    <td>Post Id: {id}</td>
                    <td>User Id: {userId}</td>
                    <td>Title: {title}</td>
                    <td>Body: {body}</td>
                    <td>
                      <button>Delete</button>
                      <button>Edit</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  export default PostList;