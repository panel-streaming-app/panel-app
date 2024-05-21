"use client";
import Image from "next/image";
import {
  iconBookmarkEmpty,
  iconBookmarkFull,
  iconMovieSmall,
} from "../../utils/iconSVGs";

import { getThumbnailPath } from "../../utils/Helpers";
import type { Film } from "types";

export default function LargeCard({
  title,
  isBookmarked,
  rating,
  year,
  category,
}: Film) {
  const imageUrl = getThumbnailPath(title);
  return (
    <div className="relative flex h-[230px] min-w-[470px] flex-shrink-0 cursor-pointer items-end justify-start overflow-hidden rounded-md p-4">
      <div className=" absolute right-0 top-0 z-10 h-[230px] w-full bg-black/30 p-2"></div>

      <Image
        src={imageUrl}
        alt={`A ${year} ${category} called ${title}, and rated ${rating}`}
        width={500}
        height={250}
        className="absolute bottom-0 left-0 z-0 h-[230px] w-full object-cover"
      />

      <div
        className="group absolute right-4 top-4 z-20 rounded-full bg-black/20 p-2 hover:bg-white"
        onClick={() => {
          console.log(isBookmarked);
        }}
      >
        <div
          className="fill-none stroke-white group-hover:stroke-black"
          aria-label={
            isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
          }
        >
          {isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
        </div>
      </div>
      <div className=" z-10 flex flex-col">
        <div className="flex flex-row gap-2 text-xs font-thin text-white/75">
          <p>{year}</p> ∙{" "}
          <div className=" flex flex-row items-center gap-1 fill-white/75">
            {iconMovieSmall}
            {category}
          </div>{" "}
          ∙ <p> {rating} </p>
        </div>
        <h2 className="text-[1.35rem] font-light text-white">{title}</h2>
      </div>
    </div>
  );
}
