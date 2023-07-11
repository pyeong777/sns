import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Image from "next/image";
import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import { parseDate } from "@/util/date";
import Imagebar from "./ui/Imagebar";

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  const { userImage, username, createdAt, likes, text } = post;
  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" />
        <span className="ml-2 font-bold text-gray-900">{username}</span>
      </div>

      <Imagebar post={post} />

      <div className="flex justify-between px-4 my-2">
        <HeartIcon />
        <BookMarkIcon />
      </div>
      <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold sm:text-base">{`좋아요 ${
          likes?.length ?? 0
        }개`}</p>
        <p>
          <span className="mr-1 text-sm font-bold sm:text-base">
            {username}
          </span>
          <span>{text}</span>
        </p>
        <p className="my-2 text-xs text-neutral-500">
          {parseDate(createdAt, "ko")}
        </p>
        <form
          action=""
          className="flex items-center py-2 border-t border-neutral-300"
        >
          <input
            className="border-none outline-none basis-11/12"
            type="text"
            placeholder="댓글 달기..."
          />
          <button className="text-sm font-bold basis-1/12">게시</button>
        </form>
      </div>
    </article>
  );
}
