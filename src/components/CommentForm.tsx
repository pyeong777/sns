export default function CommentForm() {
  return (
    <form className="flex items-center px-3 py-2 border-t border-neutral-300">
      <input
        className="border-none outline-none basis-11/12"
        type="text"
        placeholder="댓글 달기..."
      />
      <button className="text-sm font-bold basis-1/12">게시</button>
    </form>
  );
}
