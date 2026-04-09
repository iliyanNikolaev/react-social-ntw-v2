import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-content">
          <h2 className="logo">ThreadsClone</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </div>
        </div>
      </nav>

      <div className="layout">
        <aside className="sidebar">
          <Link to="/">🏠 Home</Link>
          <Link to="/profile">🙍 Profile</Link>
        </aside>

        <main className="content">
          {children}
        </main>
      </div>

      <button className="floating-btn">+</button>
    </div>
  );
}