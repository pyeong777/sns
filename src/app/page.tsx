import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) {
    redirect("/signin");
  }
  return (
    <section className="w-full flex flex-col sm:flex-row max-w-[850px] p-4 mx-auto">
      <div className="w-full min-w-0 basis-3/4">
        <FollowingBar />
        <PostList />
      </div>
      <div className="sm:ml-8 basis-1/4">
        <SideBar user={user} />
      </div>
    </section>
  );
}
