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
      <h1 className="mb-4  text-xl font-thin text-white sm:mb-6 sm:text-2xl ">
        {" "}
        {heading}{" "}
      </h1>
      <div className="scrollbar-hide flex max-w-[100%] flex-shrink-0 space-x-4 overflow-x-auto sm:gap-5">
        {media.map((film: Film) => (
          <LargeCard
            key={film.id}
            id={film.id}
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
