import MainLayout from "../../layouts/MainLayout/MainLayout";
import PostCard from "../../components/PostCard/PostCard";
import styles from "./Profile.module.css";

export default function Profile() {

  return (
    <MainLayout>
      <div className="container">

        {/* PROFILE HEADER */}
        <div className={styles.profileHeader}>
          
          <img
            className={styles.avatar}
            src="https://res.cloudinary.com/dwq3ysahj/image/upload/v1712815754/ftl4jienohqp2tib7yic.avif"
            alt="avatar"
          />

          <div className={styles.info}>
            <h2 className={styles.username}>Iliyan</h2>

            <div className={styles.meta}>
              <span>120 followers</span>
            </div>

            <div className={styles.actions}>

                <button className={styles.editBtn}>
                  Edit Profile
                </button>

                <button
                  className={styles.followingBtn}
                >
                 Following
                </button>
                <button
                  className={styles.followBtn}
                  disabled={true}
                >
                 Follow
                </button>
                
            </div>
          </div>
        </div>

        {/* POSTS */}
        <div className={styles.posts}>
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

      </div>
    </MainLayout>
  );
}