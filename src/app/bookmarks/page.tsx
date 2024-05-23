"use client";
import type { Film } from "types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "../Context/state";
import Grid from "../_components/Grid";
import { useEffect } from "react";
import { getAllBookmarks } from "~/server/queries";
import PageContainer from "../_components/PageContainer";

import SignInPage from "../sign-in/[[...sign-in]]/page";
import Search from "../_components/Search";

export default function MoviePage() {
  const { setMedia, media, setPage, setBookmarkEvent, bookmarkEvent } =
    useAppContext();
  const currentPage = "Bookmarks";

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getAllBookmarks();
      setMedia(media);
    };
    fetchMedia().catch((err) => console.log(err));
    setPage(currentPage);
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getAllBookmarks();
      setMedia(media);
    };
    fetchMedia().catch((err) => console.log(err));
    setBookmarkEvent(false);
  }, [bookmarkEvent]);

  const movies = media.filter((movie) => movie.category === "Movie");
  const series = media.filter((movie) => movie.category === "TV Series");

  return (
    <PageContainer>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search category={currentPage} />
        <Grid media={movies} heading={"Bookmarked Movies"} isTopOfPage={true} />
        <Grid media={series} heading={"Bookmarked TV Series"} />
      </SignedIn>
    </PageContainer>
  );
}
