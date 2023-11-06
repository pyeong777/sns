"use client";

import { ProfileUser } from "@/model/user";
import { useState } from "react";
import PostIcon from "./ui/icons/PostIcon";
import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import PostGrid from "./PostGrid";

type Props = {
  user: ProfileUser;
};

const tabs = [
  { type: "posts", icon: <PostIcon /> },
  { type: "saved", icon: <BookMarkIcon className="w-3 h-3" /> },
  { type: "liked", icon: <HeartIcon className="w-3 h-3" /> },
];

export default function UserPosts({ user: { username } }: Props) {
  const [query, setQuery] = useState(tabs[0].type);

  return (
    <section>
      <ul className="flex justify-center uppercase">
        {tabs.map(({ type, icon }) => (
          <li
            className="p-4 mx-12 cursor"
            key={type}
            onClick={() => setQuery(type)}
          >
            <button className='scale-150 md:scale-100 md:mr-2'>{icon}</button>
            <span className="hidden md:inline">{type}</span>
          </li>
        ))}
      </ul>
      <PostGrid username={username} query={query} />
    </section>
  );
}
