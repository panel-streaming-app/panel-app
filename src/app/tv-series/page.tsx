"use client";
import type { Film } from "types";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "../Context/state";
import Grid from "../_components/Grid";
import { useEffect } from "react";
import { getEvery } from "~/server/queries";
import PageContainer from "../_components/PageContainer";

import SignInPage from "../sign-in/[[...sign-in]]/page";
import Search from "../_components/Search";

export default function TVSeriesPage() {
  const { setMedia, media, setPage } = useAppContext();
  const currentPage = "TV Series";
  let series: Film[] = [];

  useEffect(() => {
    const fetchMedia = async () => {
      const media: Film[] = await getEvery("TV Series");
      setMedia(media);
    };
    setPage(currentPage);
    fetchMedia().catch((err) => console.log(err));
  }, []);

  series = media;

  return (
    <PageContainer>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search category={currentPage} />
        <Grid media={series} heading={currentPage} isTopOfPage={true} />
      </SignedIn>
    </PageContainer>
  );
}
