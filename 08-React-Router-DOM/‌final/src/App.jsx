import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payments from "./components/Payments";
import Post from "./components/Post";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="profile" />} />
            <Route path="profile" element={<Profile />} />
            <Route path="payments" element={<Payments />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

// programmatically naviagation => same as Link !!
// 1. useNavigage() => imperative
// 2. Navigate Component => imperative

// Link => declarative
