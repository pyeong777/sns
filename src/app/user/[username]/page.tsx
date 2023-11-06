import UserPosts from "@/components/UserPosts";
import UserProfile from "@/components/UserProfile";
import { getUserProfile } from "@/service/user";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { cache } from "react";

type Props = {
  params: { username: string };
};

const getUser = cache(async (username: string) => getUserProfile(username));

export default async function Userpage({ params: { username } }: Props) {
  const user = await getUser(username);

  if (!user) {
    notFound();
  }

  return (
    <section className="w-full">
      <UserProfile user={user} />
      <UserPosts user={user} />
    </section>
  );
}

export async function generateMetadata({
  params: { username },
}: Props): Promise<Metadata> {
  const user = await getUser(username);
  return {
    title: `${user?.name} (@${user?.username})`,
    description: `${user?.name}'s Mangoloco`,
  };
}
