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
            {/*<li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("maintenance");
                  setMaintenanceChecklistPage();
                }}
                checklistSelectionName={"mentenanță"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("metalRacking");
                  setMetalRackingChecklistPage();
                }}
                checklistSelectionName={"rafturi metalice"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("administrativeAreas");
                  setAdministrativeAreasChecklistPage();
                }}
                checklistSelectionName={"spații administrative"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("chemicalSubstance");
                  setChemicalSubstanceChecklistPage();
                }}
                checklistSelectionName={"substanțe chimice"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("hazardousAreas");
                  setHazardousAreasChecklistPage();
                }}
                checklistSelectionName={"zone periculoase"}
              />
            </li>
          </ul>

          <h2 className="mt-10 mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Liste de verificare a riscurilor specifice
          </h2>

          <ul className="space-y-3">
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("biologicalAgents");
                  setBiologicalAgentsChecklistPage();
                }}
                checklistSelectionName={"risc specific - agenți biologici"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("cancerousAgents");
                  setCancerousAgentsChecklistPage();
                }}
                checklistSelectionName={"risc specific - agenți cancerigeni"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("chemicalAgents");
                  setChemicalAgentsChecklistPage();
                }}
                checklistSelectionName={"risc specific - agenți chimici"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("atex");
                  setAtexChecklistPage();
                }}
                checklistSelectionName={"risc specific - atmosferă explozivă"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("asbestos");
                  setAsbestosCkecklistPage();
                }}
                checklistSelectionName={"risc specific - azbest"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("electromagneticFields");
                  setElectromagneticFieldsCkecklistPage();
                }}
                checklistSelectionName={
                  "risc specific - câmpuri electromagnetice"
                }
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("manualHandling");
                  setManualHandlingChecklistPage();
                }}
                checklistSelectionName={
                  "risc specific - manipulare manuală a maselor"
                }
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("sharpTools");
                  setSharpToolsChecklistPage();
                }}
                checklistSelectionName={"risc specific - obiecte ascuțite"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("opticalRadiation");
                  setOpticalRadiationChecklistPage();
                }}
                checklistSelectionName={
                  "risc specific - radiații optice artificiale"
                }
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("extremeTemperatures");
                  setExtremeTemperaturesChecklistPage();
                }}
                checklistSelectionName={"risc specific - temperaturi extreme"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("vibration");
                  setVibrationChecklistPage();
                }}
                checklistSelectionName={"risc specific - vibrații"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("noise");
                  setNoiseChecklistPage();
                }}
                checklistSelectionName={"risc specific - zgomot"}
              />
            </li> */}
          </ul>
        </div>
      </section>
    </main>
  );
}
