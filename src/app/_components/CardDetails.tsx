import { movieIcon } from "../../utils/iconSVGs";

export default function CardDetails({
  title,
  year,
  category,
  rating,
  isLargeCard,
}: {
  title: string;
  year: number;
  category: string;
  rating: string;
  isLargeCard?: boolean;
}) {
  return (
    <div className=" relative z-10 flex w-full flex-col">
      <div className="mb-[3px] flex flex-row items-center gap-2 text-xs font-thin text-white/75">
        <p>{year}</p> ∙
        <div className=" flex flex-row items-center gap-1 fill-white/75">
          <div className="size-3"> {movieIcon}</div>
          {category}
        </div>
        <div
          className={
            (isLargeCard ? "hidden lg:flex" : "") +
            " flex flex-row items-center gap-2"
          }
        >
          ∙ <p> {rating} </p>{" "}
        </div>
      </div>

      <h2
        className={
          " text-base font-light text-white" +
          (isLargeCard == true ? " sm:text-[1.35rem]" : "")
        }
      >
        {title}
      </h2>

      {isLargeCard && (
        <div className=" absolute bottom-0 right-0 rounded-full bg-white/20 px-2.5 py-0.5 text-white lg:hidden">
          {rating}
        </div>
      )}
    </div>
  );
}
