"use client";

import { parseDate } from "@/util/date";
import ToggleButton from "./ui/ToggleButton";
import HeartIcon from "./ui/icons/HeartIcon";
import BookMarkIcon from "./ui/icons/BookMarkIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import BookMarkFillIcon from "./ui/icons/BookMarkFillIcon";
import { SimplePost } from "@/model/post";
import usePosts from "@/hooks/post";
import useMe from "@/hooks/me";

type Props = {
  post: SimplePost;
  children?: React.ReactNode;
};

export default function Actionbar({ post, children }: Props) {
  const { id, likes, createdAt } = post;
  // const { data: session } = useSession();
  // const user = session?.user;
  const { user, setBookMark } = useMe();
  const { setLike } = usePosts();

  const liked = user ? likes.includes(user.username) : false;
  // const [bookmarked, setBookmarked] = useState(false);
  const bookmarked = user?.bookmarks.includes(id) ?? false;

  const handleLike = (like: boolean) => {
    user && setLike(post, user.username, like);
  };

  const handleBookMark = (bookmark: boolean) => {
    user && setBookMark(id, bookmark);
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
          onToggle={handleBookMark}
          onIcon={<BookMarkFillIcon />}
          offIcon={<BookMarkIcon />}
        />
      </div>
      <div className="px-4 py-1">
        <p className="mb-2 text-sm font-bold sm:text-base">{`좋아요 ${
          likes?.length ?? 0
        }개`}</p>
        {children}
        <p className="my-2 text-xs text-neutral-500">
          {parseDate(createdAt, "ko")}
        </p>
      </div>
    </>
  );
}
