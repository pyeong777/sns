type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <div className="p-[0.15rem] rounded-md bg-gradient-to-bl from-emerald-400 to-amber-300">
      <button
        className="text-base bg-white rounded-sm p-[0.3rem] hover:opacity-80 transition-opacity"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
