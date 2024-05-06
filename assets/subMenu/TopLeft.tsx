import type { PropsSvg } from "@/types/props";

const TopLeft = ({ className }: PropsSvg) => (
  <svg
    className={className}
    width="18"
    height="27"
    viewBox="0 0 18 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H17.3333L5.09804 5.38401L0 26.6667V0Z"
      fill="url(#paint0_linear_102_13486)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_102_13486"
        x1="8.66667"
        y1="-1.95122"
        x2="8.66667"
        y2="27.9675"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4E02B" />
        <stop offset="1" stopColor="#F48F6B" />
      </linearGradient>
    </defs>
  </svg>
);
export default TopLeft;
