import type { ReactNode } from "react";

type Props = {
  index: number;
  children: ReactNode;
};

export function QuestionCard({ index, children }: Props) {
  return (
    <div
      key={index}
      className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-x-1 hover:scale-101"
    >
      {children}
    </div>
  );
}
