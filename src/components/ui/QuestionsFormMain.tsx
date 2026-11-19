import type { ReactNode } from "react";
import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router";

type QuestionsFormProps = {
  children: ReactNode;
  handleClickForward: () => void;
};

export function QuestionsFormMain({
  children,
  handleClickForward,
}: QuestionsFormProps) {
  const navigate = useNavigate();

  return (
    <main className="flex w-full flex-col items-center px-5 pb-16 sm:px-8">
      <section className="mx-auto w-full max-w-6xl">
        <button
          onClick={() => navigate("/verificari")}
          className="mb-4 flex items-center gap-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
        >
          <ChevronsLeft />
          <span className="uppercase">înapoi la listele de verificare</span>
        </button>

        <section className="mx-auto w-full max-w-6xl rounded-3xl border border-white/20 bg-linear-to-br from-slate-950/60 via-slate-900/40 to-blue-950/50 px-6 py-8 shadow-2xl shadow-blue-950/20 backdrop-blur-md sm:px-12 sm:py-10">
          {children}
        </section>

        <button
          onClick={handleClickForward}
          className="ml-auto mt-6 flex items-center gap-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-blue-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
        >
          <span className="uppercase">generează raport</span>
          <ChevronsRight />
        </button>
      </section>
    </main>
  );
}
