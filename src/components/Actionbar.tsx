"use client";

import { parseDate } from "@/util/date";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookMarkFillIcon from "./ui/icons/BookMarkFillIcon";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

type Props = {
  post: SimplePost;
};

export default function Actionbar({ post }: Props) {
  const { id, likes, username, text, createdAt } = post;
  const { data: session } = useSession();
  const user = session?.user;
  const liked = user ? likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const { mutate } = useSWRConfig();
  const handleLike = (like: boolean) => {
    fetch("/api/likes", {
      method: "PUT",
      body: JSON.stringify({ id, like }),
    }).then(() => mutate("/api/posts"));
  };
  return (
    <>
      <div className="flex justify-between px-4 my-2">
        <ToggleButton
          toggled={liked}
          onToggle={handleLike}
          onIcon={<HeartFillIcon />}
          offIcon={<HeartIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={setBookmarked}
          onIcon={<BookMarkFillIcon />}
          offIcon={<BookMarkIcon />}
        />
      </div>
      <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold sm:text-base">{`좋아요 ${
          likes?.length ?? 0
        }개`}</p>
        {text && (
          <p>
            <span className="mr-1 text-sm font-bold sm:text-base">
              {username}
            </span>
            <span>{text}</span>
          </p>
        )}
        <p className="my-2 text-xs text-neutral-500">
          {parseDate(createdAt, "ko")}
        </p>
      </div>
    </>
  );
}
