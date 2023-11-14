"use client";

import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import Avatar from "./Avatar";
import Scrollbar from "./ui/Scrollbar";
import useMe from "@/hooks/me";

export default function FollowingBar() {
  const { user, isLoading, error } = useMe();
  const users = user?.following;

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
