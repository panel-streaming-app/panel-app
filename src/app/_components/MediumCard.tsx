"use client";
import type { Film } from "types";
import Image from "next/image";
import { getThumbnailPath } from "../../utils/Helpers";
import {
  iconMovieSmall,
  iconBookmarkFull,
  iconBookmarkEmpty,
} from "../../utils/iconSVGs";

export default function MediumCard({
  title,
  isBookmarked,
  rating,
  year,
  category,
}: Film) {
  const imageUrl = getThumbnailPath(title);

  return (
    <div className="flex flex-col gap-3 ">
      <div className="relative flex h-[173px] w-full max-w-full cursor-pointer items-end justify-start overflow-hidden rounded-md p-4">
        <div className=" absolute right-0 top-0 z-10 h-[230px] w-full bg-black/30 p-2"></div>

        <Image
          src={imageUrl}
          alt="movie"
          width={280}
          height={170}
          className="absolute bottom-0 left-0 z-0 h-[280px] w-full object-cover"
        />

        <div className=" absolute right-4 top-4 z-20 rounded-full bg-black/20 p-2 hover:bg-white">
          <div className="fill-none stroke-white group-hover:stroke-black">
            {isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
          </div>{" "}
        </div>
      </div>
      <div className="gap- z-10 flex flex-col">
        <div className="flex flex-row gap-2 text-xs font-thin text-white/75">
          <p>{year}</p> ∙{" "}
          <div className=" flex flex-row items-center gap-1 fill-white/75">
            {iconMovieSmall}
            {category}
          </div>{" "}
          ∙ <p> {rating} </p>
        </div>
        <h2 className=" text-base font-light text-white">{title}</h2>
      </div>
    </div>
  );
}
