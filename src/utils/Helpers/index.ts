import { is } from "drizzle-orm";
import { toggleBookmark } from "~/server/queries";

export const getThumbnailPath = (title: string, size = "large") => {
  const res = title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/’/g, "")
    .replace(":", "")
    .replace("ii", "2");
  let path = `/thumbnails/${res}/regular/${size}.jpg`;

  if (path == undefined) {
    path = `/thumbnails/${res}/trending/large.jpg`;
  }
  return path;
};

export const handleBookmark = async (
  id: number,
  bookmark: boolean,
): Promise<boolean | undefined> => {
  try {
    const response = await toggleBookmark(id, bookmark);
    const { isBookmarked }: { isBookmarked: boolean } = response[0]!;
    return isBookmarked;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

// export const handleBookmark = async (e: React.MouseEvent<HTMLDivElement>) => {
//   e.preventDefault();
//   try {
//     const response = await toggleBookmark(id!, bookmark);
//     if (response[0]?.isBookmarked != undefined) {
//       setBookmark(response[0].isBookmarked);
//     }
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
