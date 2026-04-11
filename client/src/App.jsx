import { Routes, Route } from "react-router-dom";

import EditProfile from "./pages/EditProfile";
import Register from "./pages/Register";
import EditPost from "./pages/EditPost";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/users" element={<Users />} />

        <Route path="/editPost" element={<EditPost />} />

        <Route path="/editProfile" element={<EditProfile />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
  );
}

export default App;