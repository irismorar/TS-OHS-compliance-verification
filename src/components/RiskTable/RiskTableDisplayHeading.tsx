import { cva } from "class-variance-authority";
import type React from "react";

type Props = {
  children?: React.ReactNode;
  isHighlighted?: boolean;
  isLockedIn?: boolean;
};

export function RiskTableDisplayHeading({
  children,
  isHighlighted,
  isLockedIn,
}: Props) {
  return (
    <td
      className={riskTableDisplayHeadingVariants({
        isHighlighted,
        isLockedIn,
      })}
    >
      {children}
    </td>
  );
}

const riskTableDisplayHeadingVariants = cva(
  ["w-10 h-10 text-center align-middle font-semibold"],
  {
    variants: {
      isHighlighted: {
        false: null,
        true: ["bg-slate-300 text-blue-600"],
      },
      isLockedIn: {
        false: null,
        true: ["bg-blue-500 text-white"],
      },
    },
    compoundVariants: [
      {
        isHighlighted: false,
        isLockedIn: false,
        className: ["bg-slate-400 text-slate-300"],
      },
    ],
  },
);
