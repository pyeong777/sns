"use client";

import { parseDate } from "@/util/date";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookMarkFillIcon from "./ui/icons/BookMarkFillIcon";

type Props = {
  likes: string[];
  username: string;
  text?: string;
  createdAt: string;
};

export default function Actionbar({ likes, username, text, createdAt }: Props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      <div className="flex justify-between px-4 my-2">
        <ToggleButton
          toggled={liked}
          onToggle={setLiked}
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
