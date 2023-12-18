"use client";

import { FormEvent, useState } from "react";

type Props = {
  onPostComment: (comment: string) => void;
};

export default function CommentForm({ onPostComment }: Props) {
  const [comment, setComment] = useState("");
  const buttonDisable = comment.length === 0;
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onPostComment(comment);
    setComment("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center px-3 py-2 border-t border-neutral-300"
    >
      <input
        className="border-none outline-none basis-11/12"
        type="text"
        placeholder="댓글 달기..."
        required
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        disabled={buttonDisable}
        className={`text-sm font-bold basis-1/12 ${
          buttonDisable ? "text-gray-300" : "text-black"
        }`}
      >
        게시
      </button>
    </form>
  );
}
