import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">social-ntw-v2</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <Link to="/">🏠 Home</Link>
          <Link to="/profile">🙍 Profile</Link>
          <Link to="/users">👥 Users</Link>
          <Link to="/login">🔐 Login</Link>
          <Link to="/register">📝 Register</Link>
        </aside>

        <main className="content">
          {children}
        </main>
      </div>

      <button className="floating-btn">+</button>

      <footer className="footer">
        <p>
          © 2026 Iliyan Nikolaev Matsin — SoftUni, React September 2026, Final Project
        </p>
    </footer>
    </div>
  );
}