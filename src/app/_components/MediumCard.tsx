"use client";
import type { Film } from "types";

import Image from "next/image";
import { playIcon } from "../../utils/iconSVGs";
import { useAppContext } from "../Context/state";

import { getThumbnailPath, handleBookmark } from "../../utils/Helpers";
import { useState, useEffect } from "react";
import Overlay from "./Overlay";
import BookmarkButton from "./BookmarkButton";
import CardDetails from "./CardDetails";

export default function MediumCard({
  title,
  isBookmarked,
  rating,
  year,
  category,
  id,
}: Film) {
  const { setBookmarkEvent, setIsPlaying } = useAppContext();
  const imageUrl = getThumbnailPath(title);
  const [bookmark, setBookmark] = useState(false);

  useEffect(() => {
    if (isBookmarked) {
      setBookmark(isBookmarked);
    }
  }, [isBookmarked]);

  const handleClick = async () => {
    const response = await handleBookmark(id!, bookmark);

    if (response != undefined) {
      setBookmark(response);
      setBookmarkEvent(true);
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col gap-3 " onClick={handlePlay}>
      <div className="group relative flex h-28 w-full max-w-full cursor-pointer items-end justify-start overflow-hidden rounded-md p-4 md:h-36 lg:h-44">
        <Overlay icon={playIcon} text="Play" />

        <Image
          src={imageUrl}
          alt="movie"
          width={280}
          height={170}
          className="absolute bottom-0 left-0 z-0 h-[280px] w-full object-cover"
        />

        <BookmarkButton bookmark={bookmark} handleClick={handleClick} />
      </div>

      <CardDetails
        title={title}
        year={year}
        category={category}
        rating={rating}
      />
    </div>
  );
}
