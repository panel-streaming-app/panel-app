import type { Film } from "types";
import MediumCard from "./MediumCard";

export default function Grid4x4({
  media,
  heading,
}: {
  media: Film[];
  heading: string;
}) {
  return (
    <>
      <h1 className="mb-4 mt-6  text-2xl font-thin text-white">{heading}</h1>
      <div className="grid w-full grid-cols-4 gap-8">
        {media.map((film: Film) => (
          <MediumCard
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
