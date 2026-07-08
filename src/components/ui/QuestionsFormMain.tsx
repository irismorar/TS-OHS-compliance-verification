import type { ReactNode } from "react";
import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";

type QuestionsFormProps = {
  children: ReactNode;
  handleClickBack: () => void;
  handleClickForward: () => void;
};

export function QuestionsFormMain({
  handleClickBack,
  children,
  handleClickForward,
}: QuestionsFormProps) {
  return (
    <main className="relative min-h-screen pb-25 flex items-center justify-center bg-slate-150">
      <button
        onClick={handleClickBack}
        className="absolute flex gap-1 -top-15 right-80 text-md text-slate-300 text-sm mt-5 rounded-xl border border-slate-300 bg-slate-100/10 px-3 py-1 shadow-sm transition-all duration-100 hover:text-blue-600 hover:scale-105 hover:font-medium hover:bg-slate-100/80"
      >
        <ChevronsLeft />
        <span>înapoi</span>
      </button>

      <section className="mx-auto w-full max-w-6xl rounded-3xl bg-slate-200 p-10 shadow-xl">
        {children}
      </section>

      <button
        onClick={handleClickForward}
        className="absolute flex gap-1 bottom-15 right-80 text-md text-slate-300 text-sm rounded-xl border border-slate-300 bg-slate-100/10 px-3 py-1 shadow-sm transition-all duration-100 hover:text-blue-600 hover:scale-105 hover:font-medium hover:bg-slate-100/80"
      >
        <span>înainte</span>
        <ChevronsRight />
      </button>
    </main>
  );
}
