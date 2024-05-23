import { bookmarkIconEmpty, bookmarkIconFull } from "../../utils/iconSVGs";

export default function BookmarkButton({
  bookmark,
  handleClick,
}: {
  bookmark: boolean;
  handleClick: () => void;
}) {
  return (
    <div
      className="absolute right-2 top-2 z-20 rounded-full bg-black/20 p-2 hover:bg-white lg:right-4 lg:top-4"
      onClick={handleClick}
    >
      <div
        className="fill-none stroke-white hover:stroke-black"
        aria-label={bookmark ? "Remove from bookmarks" : "Add to bookmarks"}
      >
        <div className="h-[15px] w-[15px]">
          {bookmark == true ? bookmarkIconFull : bookmarkIconEmpty}
        </div>
      </div>{" "}
    </div>
  );
}
