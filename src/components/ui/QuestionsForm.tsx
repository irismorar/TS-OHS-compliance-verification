import type { ReactNode } from "react";

type QuestionsFormProps = {
  children: ReactNode;
};

export function QuestionsForm({ children }: QuestionsFormProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-150">
      <section className="mx-auto w-full max-w-6xl rounded-3xl bg-slate-200 p-10 shadow-xl">
        {children}
      </section>
    </main>
  );
}
