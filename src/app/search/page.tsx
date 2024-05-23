"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "../Context/state";
import Grid from "../_components/Grid";
import PageContainer from "../_components/PageContainer";

import SignInPage from "../sign-in/[[...sign-in]]/page";
import Search from "../_components/Search";

export default function SearchPage() {
  const { searchResults, searchTerm, page } = useAppContext();

  const searchHeading = `Found ${searchResults.length} results for '${searchTerm}`;

  return (
    <PageContainer>
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search category={page != "Home" ? page : undefined} />
        <Grid
          media={searchResults}
          heading={searchHeading}
          isTopOfPage={true}
        />
      </SignedIn>
    </PageContainer>
  );
}
