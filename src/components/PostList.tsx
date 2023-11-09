"use client";

import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";
import usePosts from "@/hooks/post";

export default function PostList() {
  const { posts, isLoading } = usePosts();
  return (
    <section>
      {isLoading && (
        <div className="mt-32 text-center">
          <GridSpinner color="black" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
