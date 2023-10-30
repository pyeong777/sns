"use client";

import { HomeUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import Scrollbar from "./ui/Scrollbar";

export default function FollowingBar() {
  const { data, isLoading, error } = useSWR<HomeUser>("/api/me");
  // const users = data?.following;
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className="flex items-center justify-center w-full py-4 mb-4 rounded-lg shadow-sm shadow-neutral-300 min-h-[90px] overflow-x-auto">
      {isLoading ? (
        <PropagateLoader size={8} />
      ) : (
        (!users || users.length === 0) && <p>{`팔로잉 유저가 없습니다`}</p>
      )}
      {users && users.length > 0 && (
        <Scrollbar>
          {users.map((user) => (
            <Link
              key={user.username}
              className="flex flex-col items-center w-20"
              href={`/user/${user.username}`}
            >
              <Avatar image={user.image} highlight />
              <p className="w-full overflow-hidden text-sm text-center text-ellipsis">
                {user.username}
              </p>
            </Link>
          ))}
        </Scrollbar>
      )}
    </section>
  );
}
