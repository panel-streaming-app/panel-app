import { closeIcon, playIcon } from "~/utils/iconSVGs";
import { useAppContext } from "../Context/state";

export default function VideoPlayer() {
  const { setIsPlaying } = useAppContext();

  const handleClose = () => {
    setIsPlaying(false);
  };
  return (
    <div className="absolute left-0 top-0 z-30 flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="size-16 sm:size-32">{playIcon}</div>
          <div
            className="absolute right-4 top-4 size-6 cursor-pointer sm:right-8 sm:top-8"
            onClick={handleClose}
          >
            {closeIcon}
          </div>
        </div>
      </div>
    </div>
  );
}
