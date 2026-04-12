import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./Login.module.css";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) return;

    console.log("Login:", { username, password });
  };

  return (
    <MainLayout>
      <div className="container">
        
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Login</h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className={styles.button} type="submit">
              Login
            </button>

          </form>
        </div>

      </div>
    </MainLayout>
  );
}