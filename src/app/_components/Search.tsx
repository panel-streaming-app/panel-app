"use client";

import Image from "next/image";

export default function Search() {
  return (
    <form className="flex items-center justify-center gap-4">
      <Image src={"/icon-search.svg"} alt="Search" width={24} height={24} />
      <input
        type="search"
        placeholder="Search"
        className="w-80 border-tertiary-50 bg-transparent p-2 text-xl text-white autofill:bg-transparent focus:border-b focus:outline-none"
      />
    </form>
  );
}
