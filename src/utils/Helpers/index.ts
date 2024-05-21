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
