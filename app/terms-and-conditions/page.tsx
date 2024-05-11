import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsCategoriesList from "../components/details/detailsCategoriesList";

export default function TermsAndConditions() {
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "min-h-[58px] gap-6 text-5xl leading-[57.6px]",
        )}
      >
        Terms and Conditions
      </h1>

      <DetailsCategoriesList />
    </>
  );
}
