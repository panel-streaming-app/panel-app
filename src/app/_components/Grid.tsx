import type { Film } from "types";
import MediumCard from "./MediumCard";

export default function Grid({
  media,
  heading,
  isTopOfPage,
}: {
  media: Film[];
  heading: string;
  isTopOfPage?: boolean;
}) {
  return (
    <div
      className={
        (isTopOfPage == true ? "" : "mt-6 sm:mt-10") + " w-full pr-4 lg:pr-8"
      }
    >
      <h1 className="mb-6 text-xl font-thin text-white sm:text-2xl">
        {heading}
      </h1>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {media.map((film: Film) => (
          <MediumCard
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
    </div>
  );
}
