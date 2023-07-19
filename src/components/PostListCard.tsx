import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import Imagebar from "./ui/Imagebar";
import CommentForm from "./CommentForm";
import Actionbar from "./Actionbar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, createdAt, likes, text, images } = post;
  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" />
        <span className="ml-2 font-bold text-gray-900">{username}</span>
      </div>

      <Imagebar images={images} username={username} priority={priority} />

      <Actionbar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
    </article>
  );
}
