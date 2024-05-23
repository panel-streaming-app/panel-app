"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useAppContext } from "../Context/state";
import {
  movieIcon,
  seriesIcon,
  bookmarkIcon,
  homeIcon,
} from "../../utils/iconSVGs";
import Link from "next/link";

export default function TopNav() {
  const { page } = useAppContext();
  return (
    <div className="flex flex-row items-center justify-between  bg-primary-100 p-4 lg:my-7 lg:ml-7 lg:flex-col lg:rounded-xl lg:px-6 lg:py-[35px]">
      <section className=" flex items-center lg:flex-col lg:gap-20 ">
        <a className="flex w-6 sm:w-8" href="/">
          {<Image src="/newLogo.svg" width={32} height={32} alt="logo" />}{" "}
        </a>
      </section>

      <section className="flex h-auto gap-6 md:gap-8 lg:mt-20 lg:h-full lg:flex-col lg:gap-10">
        <Link
          href="/"
          className={
            (page == "Home" ? "fill-white" : "fill-tertiary-50") +
            " w-[15px] hover:fill-white md:w-5"
          }
        >
          {homeIcon}
        </Link>
        <Link
          href="/movies"
          className={
            (page == "Movie" ? "fill-white" : "fill-tertiary-50") +
            " w-[15px] hover:fill-white md:w-5"
          }
        >
          {movieIcon}
        </Link>
        <Link
          href="/tv-series"
          className={
            (page == "TV Series" ? "fill-white" : "fill-tertiary-50") +
            " w-[15px] hover:fill-white md:w-5"
          }
        >
          {seriesIcon}
        </Link>
        <Link
          href="/bookmarks"
          className={
            (page == "Bookmarks" ? "fill-white" : "fill-tertiary-50") +
            " w-[15px] hover:fill-white md:w-5"
          }
        >
          {bookmarkIcon}
        </Link>
      </section>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <div className=" h-6 w-6 overflow-hidden rounded-full border border-white sm:h-[40px] sm:w-[40px]">
          <div className="h-full w-full bg-white opacity-25 blur-md"></div>
        </div>
      </SignedOut>
    </div>
  );
}
