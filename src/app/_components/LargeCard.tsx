"use client";
import type { Film } from "types";

import Image from "next/image";
import { playIcon } from "../../utils/iconSVGs";
import { useAppContext } from "../Context/state";

import { getThumbnailPath, handleBookmark } from "../../utils/Helpers";
import { useState } from "react";
import CardDetails from "./CardDetails";
import BookmarkButton from "./BookmarkButton";
import Overlay from "./Overlay";

export default function LargeCard({
  title,
  isBookmarked,
  rating,
  year,
  category,
  id,
}: Film) {
  const [bookmark, setBookmark] = useState(isBookmarked);

  const imageUrl = getThumbnailPath(title);

  const { setIsPlaying } = useAppContext();

  const handleClick = async () => {
    const response = await handleBookmark(id!, bookmark);
    if (response != undefined) {
      setBookmark(response);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      className="group relative flex h-36 w-64 flex-shrink-0 cursor-pointer items-end justify-start overflow-hidden rounded-md p-4 sm:h-[230px] sm:min-w-[470px] lg:p-2"
      onClick={handlePlay}
    >
      <Overlay icon={playIcon} text="Play" />
      <Image
        src={imageUrl}
        alt={`A ${year} ${category} called ${title}, and rated ${rating}`}
        width={500}
        height={250}
        className="absolute bottom-0 left-0 z-0 h-[230px] w-full lg:object-cover"
      />

      <BookmarkButton bookmark={bookmark} handleClick={handleClick} />

      <CardDetails
        title={title}
        year={year}
        category={category}
        rating={rating}
        isLargeCard={true}
      />
    </div>
  );
}
