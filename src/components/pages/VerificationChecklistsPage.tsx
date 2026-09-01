import { ChecklistSelectionButton } from "../ui/ChecklistSelectionButton";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function VerificationChecklistsPage({
  currentRoute,
  setWorkshopChecklistPage,
  setWorkplaceChecklistPage,
  setBiologicalAgentsChecklistPage,
  setCancerousAgentsChecklistPage,
  setChemicalAgentsChecklistPage,
  setAtexChecklistPage,
  setAsbestosCkecklistPage,
  setElectromagneticFieldsCkecklistPage,
  initChecklistQuestions,
}: Props) {
  if (currentRoute !== "verificationChecklists") {
    return null;
  }

  return (
    <main className="min-h-screen flex items-center justify-center pt-10 pb-10">
      <section className="w-full max-w-4xl rounded-3xl bg-slate-200 p-10 shadow-xl select-none">
        <h1 className="text-4xl font-black text-slate-900">
          Selectează lista de verificare
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Alege categoria pentru care dorești să efectuezi verificarea SSM
        </p>

        <ul className="mt-5 space-y-4">
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

          <li>
            <h2 className="mt-15 mb-5 text-lg text-slate-500">
              Dacă este cazul adaugă verificarea riscurilor specifice pentru:
            </h2>
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("biologicalAgents");
                setBiologicalAgentsChecklistPage();
              }}
              checklistSelectionName={"locații unde există și agenți biologici"}
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("cancerousAgents");
                setCancerousAgentsChecklistPage();
              }}
              checklistSelectionName={
                "locații unde există și agenți cancerigeni"
              }
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("chemicalAgents");
                setChemicalAgentsChecklistPage();
              }}
              checklistSelectionName={"locații unde există și agenți chimici"}
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("atex");
                setAtexChecklistPage();
              }}
              checklistSelectionName={
                "locații unde există și atmosferă explozivă"
              }
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("asbestos");
                setAsbestosCkecklistPage();
              }}
              checklistSelectionName={"locații unde există și azbest"}
            />
          </li>
          <li>
            <ChecklistSelectionButton
              handleClick={() => {
                initChecklistQuestions("electromagneticFields");
                setElectromagneticFieldsCkecklistPage();
              }}
              checklistSelectionName={
                "locații unde există și câmpuri electromagnetice"
              }
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
