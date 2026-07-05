import type { ReactNode } from "react";

type Props = {
  unansweredQuestionRef?: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function QuestionCard({ children, unansweredQuestionRef }: Props) {
  return (
    <div
      ref={unansweredQuestionRef}
      className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all duration-200 hover:shadow-lg hover:translate-x-1 hover:scale-101"
    >
      {children}
    </div>
  );
}
