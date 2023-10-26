type Props = {
  text: string;
  onClick: () => void;
  size?: "small" | "big";
};

export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-emerald-400 to-amber-300 h-fit
    ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem] "}`}
    >
      <button
        className={`bg-white rounded-sm  hover:opacity-80 transition-opacity
        ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base "}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
