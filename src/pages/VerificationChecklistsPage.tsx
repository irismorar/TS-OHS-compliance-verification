import { SquareArrowRightEnter } from "lucide-react";
import type { useComplianceVerificationState } from "../useComplianceVerificationState";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function VerificationChecklistsPage({
  currentRoute,
  setWorkshopChecklistPage,
  setWorkplaceChecklistPage,
  initChecklistQuestions,
}: Props) {
  if (currentRoute !== "verificationChecklists") {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-150">
      <section className="w-full max-w-4xl rounded-3xl bg-slate-200 p-10 shadow-xl select-none">
        <h1 className="text-4xl font-black text-slate-900">
          Selectează lista de verificare
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Alege categoria pentru care dorești să efectuezi verificarea SSM.
        </p>

        <ol className="mt-10 space-y-4">
          <button
            onClick={() => {
              initChecklistQuestions("workshop");
              setWorkshopChecklistPage();
            }}
            className="w-full group flex items-center justify-between text-xl rounded-2xl text-slate-500 border border-slate-200 px-6 py-5 transition-all duration-300 hover:border-gray-500 hover:bg-slate-50 hover:shadow-md hover:text-blue-600"
          >
            <div className="flex items-start flex-col">
              <h3 className="text-xl font-semibold text-slate-900">Atelier</h3>

              <p className="text-slate-500">
                Verificare generală SSM pentru atelier
              </p>
            </div>
            <SquareArrowRightEnter
              size={25}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
            />
          </button>
          <button
            onClick={() => {
              initChecklistQuestions("workplace");
              setWorkplaceChecklistPage();
            }}
            className="w-full group flex items-center justify-between text-xl rounded-2xl text-slate-500 border border-slate-200 px-6 py-5 transition-all duration-300 hover:border-gray-500 hover:bg-slate-50 hover:shadow-md hover:text-blue-600"
          >
            <div className="flex items-start flex-col">
              <h3 className="text-xl font-semibold text-slate-900">
                Loc de muncă
              </h3>

              <p className="text-slate-500">
                Verificare generală SSM pentru loc de muncă
              </p>
            </div>

            <SquareArrowRightEnter
              size={25}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
            />
          </button>
        </ol>
      </section>
    </main>
  );
}
