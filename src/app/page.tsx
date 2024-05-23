"use client";
import type { Film } from "types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "./Context/state";
import { useEffect } from "react";
import { getEvery } from "~/server/queries";
import PageContainer from "./_components/PageContainer";

import SignInPage from "./sign-in/[[...sign-in]]/page";
import Search from "./_components/Search";
import CarouselSection from "./_components/CarouselSection";
import Grid from "./_components/Grid";

export default function HomePage() {
  const { setMedia, media, setPage } = useAppContext();
  const currentPage = "Home";

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getEvery();
      setMedia(media);
    };
    fetchMedia().catch((err) => console.log(err));
    setPage(currentPage);
  }, []);

  const trending = media.filter((film) => film.isTrending);

  return (
    <PageContainer>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search />
        <CarouselSection media={trending} heading="Trending" />
        <Grid media={media} heading="Recomended for you" />
      </SignedIn>
    </PageContainer>
  );
}
