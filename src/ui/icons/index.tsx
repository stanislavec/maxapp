import { colors } from "../theme";

export const PdsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="32"
      height="28"
      rx="4"
      fill="transparent"
      stroke={colors.brand}
      stroke-width="2"
    />
    <circle
      cx="24"
      cy="26"
      r="7"
      fill="transparent"
      stroke={colors.brand}
      stroke-width="2"
    />
    <rect x="19" y="25" width="10" height="2" rx="1" fill={colors.brand} />
    <circle cx="24" cy="26" r="2" fill={colors.brand} />
    <rect
      x="14"
      y="6"
      width="20"
      height="6"
      rx="2"
      fill="#E6F4FF"
      stroke={colors.brand}
      stroke-width="2"
    />
    <rect
      x="14"
      y="6"
      width="20"
      height="6"
      rx="2"
      stroke="#fff"
      stroke-width="0.4"
      fill="none"
    />
  </svg>
);

export const NpoIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 7C31 7 38 12 38 20C38 36 24 41 24 41C24 41 10 36 10 20C10 12 17 7 24 7Z"
      fill="#DEF2FD"
      stroke={colors.brand}
      stroke-width="2"
    />
    <circle
      cx="24"
      cy="23"
      r="6"
      fill="transparent"
      stroke={colors.brand}
      stroke-width="2"
    />
    <rect x="21" y="22" width="6" height="2" rx="1" fill={colors.brand} />
    <circle cx="24" cy="23" r="2" fill={colors.brand} />
  </svg>
);

export const OpsIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37 22c0 9-8.5 15-13 15S11 31 11 22V11l13-5 13 5v11z"
      fill="transparent"
      stroke={colors.brand}
      stroke-width="2"
    />
    <path
      d="M24 17a6 6 0 110 12 6 6 0 010-12z"
      fill="transparent"
      stroke={colors.brand}
      stroke-width="2"
    />
    <rect x="21" y="22" width="6" height="2" rx="1" fill={colors.brand} />
    <circle cx="24" cy="23" r="2" fill={colors.brand} />
  </svg>
);
