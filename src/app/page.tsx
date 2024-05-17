import { SignedIn, SignedOut } from "@clerk/nextjs";

import SignInPage from "./sign-in/[[...sign-in]]/page";

export default function HomePage() {
  return (
    <div className="flex h-screen w-lvw flex-col items-center justify-center">
      <SignedOut>
        <SignInPage />
      </SignedOut>
      <SignedIn>
        <h1 className="text-white">YOU ARE SIGNED IN</h1>
      </SignedIn>
      ;
    </div>
  );
}
