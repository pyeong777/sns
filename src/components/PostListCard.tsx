"use client";

import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import Actionbar from "./Actionbar";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import Image from "next/image";
import PostDetail from "./PostDetail";
import PostUserAvatar from "./PostUserAvatar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const { userImage, username, createdAt, likes, text, image } = post;
  const [openModal, setOpenModal] = useState(false);
  return (
    <article className="border border-gray-200 rounded-lg shadow-md">
      <PostUserAvatar image={userImage} username={username} />
      <Image
        className="object-cover w-full aspect-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
        onClick={() => setOpenModal(true)}
      />

      <Actionbar
        likes={likes}
        username={username}
        text={text}
        createdAt={createdAt}
      />
      <CommentForm />
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetail post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
