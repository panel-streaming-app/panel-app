import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import {
  iconMovieNav,
  iconTvSeriesNav,
  iconBookmarkNav,
  iconHomeNav,
} from "../../utils/iconSVGs";

export default function TopNav() {
  return (
    <div className="my-7 ml-7 flex flex-col items-center justify-between rounded-xl bg-primary-100 px-6 py-[35px]">
      <section className=" flex flex-col items-center gap-20">
        <a className="flex">
          {<Image src="/newLogo.svg" width={32} height={32} alt="logo" />}{" "}
        </a>

        <section className="flex h-auto flex-col gap-10">
          <a href="" className="  fill-white hover:fill-white">
            {iconHomeNav}
          </a>
          <a href="" className=" fill-tertiary-50 hover:fill-white">
            {iconMovieNav}
          </a>
          <a href="" className=" fill-tertiary-50 hover:fill-white">
            {iconTvSeriesNav}
          </a>
          <a href="" className=" fill-tertiary-50 hover:fill-white">
            {iconBookmarkNav}
          </a>
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
