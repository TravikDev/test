import type { PropsSvg } from "@/shared/types/props";

export const TopLeftInactive = ({ className, fill }: PropsSvg) => (
  <svg
    className={className}
    width="24"
    height="16"
    viewBox="0 0 24 16"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H23.3333L5.10417 5.45594L0 16V0Z" fill="#7E93A8" />
  </svg>
);