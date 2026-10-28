import type { ReactNode } from "react";

type Props = {
  id?: string;
  unansweredQuestionRef?: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function QuestionCard({ id, children, unansweredQuestionRef }: Props) {
  return (
    <div
      id={id}
      ref={unansweredQuestionRef}
      className="mt-3 scroll-mt-4 rounded-2xl border border-white/25 bg-white/15 p-6 shadow-sm transition-all duration-200 hover:border-blue-400/50 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-950/30"
    >
      {children}
    </div>
  );
}
