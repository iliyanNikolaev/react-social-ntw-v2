import { useState } from "react";
import styles from "./PostCard.module.css";

export default function PostCard() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12);
  
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "maria", text: "Много як пост!" },
    { id: 2, user: "ivan", text: "Съгласен съм 🔥" }
  ]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        user: "you",
        text: commentText
      }
    ]);
    setCommentText("");
  };

  return (
    <div className={styles.card}>
      {/* USER */}
      <div className={styles.userRow}>
        <div className={styles.avatar} />
        <div className={styles.userInfo}>
          <div className={styles.username}>Iliyan</div>
          <div className={styles.handle}>@iliyan_dev</div>
        </div>
      </div>

      {/* TEXT */}
      <div className={styles.postText}>
        Това е примерен пост. В момента UI-то е хардкоднато, но по-късно ще го вържем със Supabase.
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <button 
          className={`${styles.actionButton} ${liked ? styles.isLiked : ""}`} 
          onClick={handleLike}
        >
          ❤️ {likes}
        </button>

        <button 
          className={styles.actionButton} 
          onClick={() => setShowComments(!showComments)}
        >
          💬 {comments.length}
        </button>
      </div>

      {showComments && (
        <div className={styles.commentsWrapper}>
          {/* LIST */}
          {comments.map(c => (
            <div key={c.id} className={styles.comment}>
              <span className={styles.commentUser}>@{c.user}</span>
              {c.text}
            </div>
          ))}

          {/* INPUT */}
          <div className={styles.commentInputWrapper}>
            <input
              className={styles.commentInput}
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <button 
              className={styles.commentButton}
              onClick={handleAddComment}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
}