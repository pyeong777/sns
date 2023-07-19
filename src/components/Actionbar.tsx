import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import { parseDate } from "@/util/date";

type Props = {
  likes: string[];
  username: string;
  text: string;
  createdAt: string;
};

export default function Actionbar({ likes, username, text, createdAt }: Props) {
  return (
    <>
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
      </div>
    </>
  );
}
