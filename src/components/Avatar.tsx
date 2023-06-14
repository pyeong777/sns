type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="rounded-full bg-gradient-to-bl from-emerald-400 to-amber-300 w-9 h-9">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-full p-[0.1rem]"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
