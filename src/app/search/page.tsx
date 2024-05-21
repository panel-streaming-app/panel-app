"use client";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useAppContext } from "../Context/state";
import Grid4x4 from "../_components/Grid4x4";

import SignInPage from "../sign-in/[[...sign-in]]/page";
import Search from "../_components/Search";

export default function SearchPage() {
  const { searchResults, searchTerm, page } = useAppContext();

  const searchHeading = `Found ${searchResults.length} results for '${searchTerm}`;

  return (
    <div className="max-w-screen m-0 flex h-screen w-lvw  flex-col items-start justify-start overflow-x-hidden p-8">
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <Search category={page != "Home" ? page : undefined} />
        <Grid4x4 media={searchResults} heading={searchHeading} />
      </SignedIn>
      ;
    </div>
  );
}
