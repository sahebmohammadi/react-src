import { Link, useParams, useSearchParams } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Title One",
    body: "Body One",
  },
  {
    id: 2,
    title: "Title Two",
    body: "Body Two",
  },
  {
    id: 3,
    title: "Title Three",
    body: "Body Three",
  },
];

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  const [serachParams, setSearchParams] = useSearchParams();

  console.log(serachParams.getAll("type"));
  return (
    <div>
      <h1>Singel Post</h1>
      <div>post id : {id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to="/app/posts">Go to posts</Link>
      <button onClick={() => setSearchParams({ type: "cash" })}>
        update query
      </button>
    </div>
  );
}
export default Post;

