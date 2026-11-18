import { ChecklistSelectionButton } from "../ui/ChecklistSelectionButton";
import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";
import { Link, useResolvedPath } from "react-router";

export function VerificationChecklistsPage() {
  const { pathname } = useResolvedPath("");
  const complianceVerificationContext = useComplianceVerificationContext();

  const { initChecklistQuestions } = complianceVerificationContext;

  return (
    <main className="flex min-h-dvh w-full flex-col">
      <section className="flex flex-1 items-center justify-center px-5 py-8 sm:px-8">
        <div className="w-full max-w-4xl select-none rounded-3xl border border-white/20 bg-linear-to-br from-slate-950/60 via-slate-900/40 to-blue-950/50 px-6 py-8 shadow-2xl shadow-blue-950/20 backdrop-blur-md sm:px-12 sm:py-10">
          {/* Header */}
          <header className="mb-8 text-center">
            <h1 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Selectează lista de verificare
            </h1>

            <p className="mt-3 text-sm text-slate-200 sm:text-base">
              Alege tipul de verificare pe care dorești să îl efectuezi.
            </p>
          </header>

          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Liste de verificare
          </h2>

          <ul className="space-y-3">
            <li>
              <Link to={`${pathname}/atelier`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("workshop");
                  }}
                  checklistSelectionName={"atelier"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/audit-intern`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("internalAudit");
                  }}
                  checklistSelectionName={"audit intern"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/audit-manipulare-manuala-a-sarcinilor`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("manualHandlingOfLoadsAudit");
                  }}
                  checklistSelectionName={
                    "audit pentru manipularea manuală a sarcinilor"
                  }
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/birotica`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("officeEquipment");
                  }}
                  checklistSelectionName={"birotică"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/birouri`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("office");
                  }}
                  checklistSelectionName={"birouri"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/electrice`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("electrical");
                  }}
                  checklistSelectionName={"electrice"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/echipament-individual-de-munca`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("workEquipment");
                  }}
                  checklistSelectionName={"echipament individual de muncă"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/loto`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("loto");
                  }}
                  checklistSelectionName={"LOTO"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/loc-de-munca`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("workplace");
                  }}
                  checklistSelectionName={"loc de muncă"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/lucru-la-inaltime`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("workAtHeight");
                  }}
                  checklistSelectionName={"lucru la înălțime"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/lucru-pe-scari`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("workUsingLadders");
                  }}
                  checklistSelectionName={"lucru pe scări"}
                />
              </Link>
            </li>
            <li>
              <Link
                to={`${pathname}/manipulare-sarcini-folosind-transpaleta-cu-catarg`}
              >
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("loadHandlingUsingStackerTruck");
                  }}
                  checklistSelectionName={
                    "manipulare sarcini folosind transpaleta cu catarg"
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                to={`${pathname}/manipulare-sarcini-folosind-transpaleta-mecanica`}
              >
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions(
                      "loadHandlingUsingManualPalletTruck",
                    );
                  }}
                  checklistSelectionName={
                    "manipulare sarcini folosind transpaleta mecanică"
                  }
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/mentenanta`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("maintenance");
                  }}
                  checklistSelectionName={"mentenanță"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/rafturi-metalice`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("metalRacking");
                  }}
                  checklistSelectionName={"rafturi metalice"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/spatii-administrative`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("administrativeAreas");
                  }}
                  checklistSelectionName={"spații administrative"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/substante-chimice`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("chemicalSubstance");
                  }}
                  checklistSelectionName={"substanțe chimice"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/zone-periculoase`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("hazardousAreas");
                  }}
                  checklistSelectionName={"zone periculoase"}
                />
              </Link>
            </li>
          </ul>

          <h2 className="mt-10 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Liste de verificare a riscurilor specifice
          </h2>

          <ul className="space-y-3">
            <li>
              <Link to={`${pathname}/risc-specific-agenti-biologici`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("biologicalAgents");
                  }}
                  checklistSelectionName={"risc specific - agenți biologici"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-agenti-cancerigeni`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("cancerousAgents");
                  }}
                  checklistSelectionName={"risc specific - agenți cancerigeni"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-agenti-chimici`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("chemicalAgents");
                  }}
                  checklistSelectionName={"risc specific - agenți chimici"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-atmosfera-exploziva`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("atex");
                  }}
                  checklistSelectionName={"risc specific - atmosferă explozivă"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-azbest`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("asbestos");
                  }}
                  checklistSelectionName={"risc specific - azbest"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-campuri-electromagnetice`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("electromagneticFields");
                  }}
                  checklistSelectionName={
                    "risc specific - câmpuri electromagnetice"
                  }
                />
              </Link>
            </li>
            <li>
              <Link
                to={`${pathname}/risc-specific-manipulare-manuala-a-maselor`}
              >
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("manualHandling");
                  }}
                  checklistSelectionName={
                    "risc specific - manipulare manuală a maselor"
                  }
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-obiecte-ascutite`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("sharpTools");
                  }}
                  checklistSelectionName={"risc specific - obiecte ascuțite"}
                />
              </Link>
            </li>
            <li>
              <Link
                to={`${pathname}/risc-specific-radiatii-optice-artificiale`}
              >
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("opticalRadiation");
                  }}
                  checklistSelectionName={
                    "risc specific - radiații optice artificiale"
                  }
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-temperaturi-extreme`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("extremeTemperatures");
                  }}
                  checklistSelectionName={"risc specific - temperaturi extreme"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-vibratii`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("vibration");
                  }}
                  checklistSelectionName={"risc specific - vibrații"}
                />
              </Link>
            </li>
            <li>
              <Link to={`${pathname}/risc-specific-zgomot`}>
                <ChecklistSelectionButton
                  handleClick={() => {
                    initChecklistQuestions("noise");
                  }}
                  checklistSelectionName={"risc specific - zgomot"}
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
