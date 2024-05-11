import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsCategoriesList from "../components/details/detailsCategoriesList";

export default function PrivacyPolicy() {
  return (
    <>
      <h1
        className={twMerge(
          sofiaSans.className,
          "min-h-[58px] gap-6 text-5xl leading-[57.6px]",
        )}
      >
        Privacy Policy
      </h1>

      <DetailsCategoriesList />
    </>
  );
}
