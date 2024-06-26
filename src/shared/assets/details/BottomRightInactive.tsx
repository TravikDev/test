import type { PropsSvg } from "@/shared/types/props";

export const BottomRightInactive = ({ className, fill }: PropsSvg) => (
  <svg
    className={className}
    width="30"
    height="18"
    viewBox="0 0 30 18"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M30 18H0.666666L24.6964 12.0894L30 0.666666V18Z" fill="#7E93A8" />
  </svg>
);
