export default function Overlay({
  icon,
  text,
}: {
  icon?: JSX.Element;
  text?: string;
}) {
  return (
    <div className=" absolute right-0 top-0 z-10 flex h-full w-full items-center justify-center bg-black/30 p-2 group-hover:bg-black/50">
      <div className="animate-fade  hidden h-12 w-auto items-center justify-center gap-3 rounded-full bg-white/20 px-2 text-white transition-transform group-hover:flex">
        <div className="w-8">{icon}</div> <p>{text}</p>
      </div>
    </div>
  );
}
