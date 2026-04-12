import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./Register.module.css";
import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    console.log("Register:", { username, password });
  };

  return (
    <MainLayout>
      <div className="container">
        
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Register</h2>

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

            <input
              className={styles.input}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className={styles.button} type="submit">
              Register
            </button>

          </form>
        </div>

      </div>
    </MainLayout>
  );
}