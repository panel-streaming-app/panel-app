"use client";
import type { Film } from "types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "./Context/state";
import { useEffect } from "react";
import { getAll } from "~/server/queries";

import SignInPage from "./sign-in/[[...sign-in]]/page";
import Search from "./_components/Search";
import LargeCard from "./_components/LargeCard";
import MediumCard from "./_components/MediumCard";

export default function HomePage() {
  const { setMedia, media } = useAppContext();

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getAll();
      setMedia(media);
    };
    fetchMedia().catch((err) => console.log(err));
  }, []);

  const trending = media.filter((film) => film.isTrending);

  return (
    <div className="max-w-screen m-0 flex h-screen w-lvw  flex-col items-start justify-start overflow-x-hidden p-8">
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search />
        <h1 className=" my-5 text-2xl font-thin text-white"> Trending </h1>
        <div className="scrollbar-hide flex max-w-[100%] flex-shrink-0 space-x-4 overflow-x-auto  py-4">
          {trending.map((film: Film) => (
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

        <h1 className="mb-4 mt-6  text-2xl font-thin text-white">
          {" "}
          Recommended for you{" "}
        </h1>
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
      </SignedIn>
      ;
    </div>
  );
}
