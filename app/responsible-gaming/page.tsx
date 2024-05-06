import { sofiaSans } from "@/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsCategoriesList from "../terms-and-conditions/detailsCategoriesList";

export default function ResponsibleGaming() {
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "text-5xl leading-[57.6px] gap-6 min-h-[58px]"
        )}
      >
        Responsible Gaming
      </h1>

      <DetailsCategoriesList />
    </>
  );
}