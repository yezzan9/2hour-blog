import PostCard from "./_components/common/PostCard";

export default function Home() {
  return (
    <div>
      <div className="featured-post">
        <div>Featured Posts</div>
        <div>More →</div>
      </div>
      <PostCard />
      <PostCard />
    </div>
  );
}
