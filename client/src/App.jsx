import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import PostDetails from "./pages/PostDetails";
import EditPost from "./pages/EditPost";
import EditProfile from "./pages/EditProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/users" element={<Users />} />

        <Route path="/postDetails" element={<PostDetails />} />

        <Route path="/editPost" element={<EditPost />} />

        <Route path="/editProfile" element={<EditProfile />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
  );
}

export default App;