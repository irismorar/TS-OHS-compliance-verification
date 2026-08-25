import { ChecklistSelectionButton } from "../ui/ChecklistSelectionButton";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";

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
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-full max-w-4xl rounded-3xl bg-slate-200 p-10 shadow-xl select-none">
        <h1 className="text-4xl font-black text-slate-900">
          Selectează lista de verificare
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Alege categoria pentru care dorești să efectuezi verificarea SSM.
        </p>

        <ul className="mt-10 space-y-4">
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("workshop");
                setWorkshopChecklistPage();
              }}
              checklistSelectionName={"atelier"}
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("workplace");
                setWorkplaceChecklistPage();
              }}
              checklistSelectionName={"loc de muncă"}
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
