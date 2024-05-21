import LargeCard from "./LargeCard";
import type { Film } from "types";

export default function CarouselSection({
  media,
  heading,
}: {
  media: Film[];
  heading: string;
}) {
  return (
    <>
      <h1 className=" my-5 text-2xl font-thin text-white"> {heading} </h1>
      <div className="scrollbar-hide flex max-w-[100%] flex-shrink-0 space-x-4 overflow-x-auto  py-4">
        {media.map((film: Film) => (
          <LargeCard
            key={film.id}
            title={film.title}
            isBookmarked={film.isBookmarked}
            rating={film.rating}
            year={film.year}
            category={film.category}
            isTrending={film.isTrending}
          />
        ))}
      </div>
    </>
  );
}
