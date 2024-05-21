"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useAppContext } from "../Context/state";
import {
  iconMovieNav,
  iconTvSeriesNav,
  iconBookmarkNav,
  iconHomeNav,
} from "../../utils/iconSVGs";
import Link from "next/link";

export default function TopNav() {
  const { page } = useAppContext();
  return (
    <div className="my-7 ml-7 flex flex-col items-center justify-between rounded-xl bg-primary-100 px-6 py-[35px]">
      <section className=" flex flex-col items-center gap-20">
        <a className="flex" href="/">
          {<Image src="/newLogo.svg" width={32} height={32} alt="logo" />}{" "}
        </a>

        <section className="flex h-auto flex-col gap-10">
          <Link
            href="/"
            className={
              page == "Home"
                ? "fill-white"
                : "fill-tertiary-50" + " hover:fill-white"
            }
          >
            {iconHomeNav}
          </Link>
          <Link
            href="/movies"
            className={
              page == "Movie"
                ? "fill-white"
                : "fill-tertiary-50" + " hover:fill-white"
            }
          >
            {iconMovieNav}
          </Link>
          <Link
            href="/tv-series"
            className={
              page == "TV Series"
                ? "fill-white"
                : "fill-tertiary-50" + " hover:fill-white"
            }
          >
            {iconTvSeriesNav}
          </Link>
          <Link
            href="/bookmarks"
            className={
              page == "Bookmarks"
                ? "fill-white"
                : "fill-tertiary-50" + " hover:fill-white"
            }
          >
            {iconBookmarkNav}
          </Link>
        </section>
      </section>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <div className=" h-[40px] w-[40px] overflow-hidden rounded-full border border-white">
          <div className="h-full w-full bg-white opacity-25 blur-md"></div>
        </div>
      </SignedOut>
    </div>
  );
}
