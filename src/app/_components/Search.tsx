"use client";

import Image from "next/image";
import { getBySearch, getBookmarkBySearch } from "~/server/queries";
import { useAppContext } from "~/app/Context/state";
import { useRouter } from "next/navigation";

export default function Search({ category }: { category?: string }) {
  const { setSearchResults, setSearchTerm, setPage } = useAppContext();

  const Router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;
    const query = target.value;
    let res;

    async function SearchMedia(): Promise<void> {
      if (category !== undefined) {
        setPage(category);
        if (category === "Bookmarks") {
          res = await getBookmarkBySearch(query);
        } else {
          res = await getBySearch(query, category);
        }
      } else {
        setPage("Home");
        res = await getBySearch(query);
      }

      setSearchTerm(query);
      setSearchResults(res);

      Router.push("/search");
    }

    try {
      await SearchMedia();
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      void handleSubmit(e);
    }
  };

  return (
    <form
      className="flex items-center justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <Image src={"/icon-search.svg"} alt="Search" width={24} height={24} />
      <input
        type="search"
        placeholder={
          category !== undefined ? `Search for ${category}` : "Search"
        }
        className="w-80 border-tertiary-50 bg-transparent p-2 text-xl text-white autofill:bg-transparent focus:border-b focus:outline-none"
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}
