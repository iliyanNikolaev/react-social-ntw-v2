import CreatePost from "../components/CreatePost/CreatePost";
import PostCard from "../components/PostCard/PostCard";
import MainLayout from "../layouts/MainLayout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container">
        <CreatePost />

        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />

      </div>
    </MainLayout>
  );
}