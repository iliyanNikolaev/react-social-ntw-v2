import { useState } from "react";
import styles from "./CreatePost.module.css";

export default function CreatePost({ onClose, isModal }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    console.log("New post:", text);
    setText("");
    if (onClose) onClose();
  };

  
  // Комбинираме базовия клас .wrapper с .isModal, ако условието е изпълнено
  const containerClass = `${styles.wrapper} ${isModal ? styles.isModal : ""}`;

  return (
    <div className={containerClass}>
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