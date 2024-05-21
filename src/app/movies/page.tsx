"use client";
import type { Film } from "types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "../Context/state";
import Grid4x4 from "../_components/Grid4x4";
import { useEffect } from "react";
import { getEvery } from "~/server/queries";

import SignInPage from "../sign-in/[[...sign-in]]/page";
import Search from "../_components/Search";

export default function MoviePage() {
  const { setMedia, media, setPage } = useAppContext();
  const currentPage = "Movie";
  let movies: Film[] = [];

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getEvery("Movie");
      setMedia(media);
    };
    fetchMedia().catch((err) => console.log(err));
    setPage(currentPage);
  }, []);

  movies = media;

  return (
    <div className="max-w-screen m-0 flex h-screen w-lvw  flex-col items-start justify-start overflow-x-hidden p-8">
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search category={currentPage} />
        <Grid4x4 media={movies} heading={currentPage} />
      </SignedIn>
      ;
    </div>
  );
}
