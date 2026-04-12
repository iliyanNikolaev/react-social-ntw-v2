import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./Users.module.css";
import { useState } from "react";

export default function Users() {
  const [following, setFollowing] = useState({});

  const users = [
    { id: 1, username: "iliyan" },
    { id: 2, username: "maria" },
    { id: 3, username: "ivan" },
    { id: 4, username: "georgi" },
    { id: 5, username: "petya" },
  ];

  const toggleFollow = (id) => {
    setFollowing((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <MainLayout>
      <div className="container">
        <div className={styles.list}>
          {users.map((user) => (
            <div key={user.id} className={`card ${styles.userCard}`}>
              
              <div className={styles.userInfo}>
                <div className={styles.username}>
                  {user.username}
                </div>
                <div className={styles.handle}>
                  @{user.username}
                </div>
              </div>

              <button
                className={styles.followBtn}
                onClick={() => toggleFollow(user.id)}
              >
                {following[user.id] ? "Following" : "Follow"}
              </button>

            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}