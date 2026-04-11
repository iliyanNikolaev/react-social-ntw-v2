import FloatingButton from "../../components/FloatingButton/FloatingButton";
import styles from "./MainLayout.module.css";
import { Link } from "react-router-dom";

export default function MainLayout({ children }) {

  return (
    <div className={styles.appWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <h2 className={styles.logo}>social-ntw-v2</h2>

          <div className={styles.navLinks}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/users">Users</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <Link to="/">🏠 Home</Link>
          <Link to="/profile">🙍 Profile</Link>
          <Link to="/users">👥 Users</Link>
          <Link to="/login">🔐 Login</Link>
          <Link to="/register">📝 Register</Link>
        </aside>

        <main className={styles.content}>
          {children}
        </main>
      </div>

      <FloatingButton/>

      <footer className={styles.footer}>
        © 2026 Iliyan Nikolaev Matsin — SoftUni, React September 2026, Final Project
      </footer>
    </div>
  );
}