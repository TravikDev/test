import type { PropsSvg } from "@/shared/types/props";

export const BottomLeft = ({ className, fill }: PropsSvg) => (
  <svg
    className={className || "none"}
    width="22"
    height="25"
    viewBox="0 0 22 25"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.5"
      d="M0 25H22L4.95 19.566L0 0.333334V25Z"
      fill="#F48F6B"
    />
  </svg>
);
