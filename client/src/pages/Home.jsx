import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container">
        <div className="card">Post 1</div>
        <div className="card">Post 2</div>
      </div>
    </MainLayout>
  );
}