import { useState } from "react";
import styles from "./CreatePost.module.css";

export default function CreatePost() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    console.log("New post:", text);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.textarea}
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Post
        </button>
      </form>
    </div>
  );
}