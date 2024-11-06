import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/posts">See latest posts?</Link>
    </div>
  );
}
export default Home;
