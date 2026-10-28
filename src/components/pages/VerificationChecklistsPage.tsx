import { ChecklistSelectionButton } from "../ui/ChecklistSelectionButton";
import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";

export function VerificationChecklistsPage() {
  const complianceVerificationContext = useComplianceVerificationContext();

  const {
    currentRoute,
    setWorkshopChecklistPage,
    setWorkplaceChecklistPage,
    setBiologicalAgentsChecklistPage,
    setCancerousAgentsChecklistPage,
    setChemicalAgentsChecklistPage,
    setAtexChecklistPage,
    setAsbestosCkecklistPage,
    setElectromagneticFieldsCkecklistPage,
    setManualHandlingChecklistPage,
    setSharpToolsChecklistPage,
    setOpticalRadiationChecklistPage,
    setExtremeTemperaturesChecklistPage,
    setVibrationChecklistPage,
    setNoiseChecklistPage,
    setInternalAuditChecklistPage,
    setMaintenanceChecklistPage,
    setManualHandlingOfLoadsAuditChecklistPage,
    setWorkEquipmentChecklistPage,
    setLoadHandlingUsingStackerTruckChecklistPage,
    setLotoChecklistPage,
    setLoadHandlingUsingManualPalletTruckChecklistPage,
    setElectricalChecklistPage,
    setWorkAtHeightChecklistPage,
    setWorkUsingLaddersChecklistPage,
    setMetalRackingChecklistPage,
    setChemicalSubstanceChecklistPage,
    setAdministrativeAreasChecklistPage,
    setOfficeChecklistPage,
    setOfficeEquipmentChecklistPage,
    setHazardousAreasChecklistPage,
    initChecklistQuestions,
  } = complianceVerificationContext;

  if (currentRoute !== "verificationChecklists") {
    return null;
  }

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
                  initChecklistQuestions("internalAudit");
                  setInternalAuditChecklistPage();
                }}
                checklistSelectionName={"audit intern"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("manualHandlingOfLoadsAudit");
                  setManualHandlingOfLoadsAuditChecklistPage();
                }}
                checklistSelectionName={
                  "audit pentru manipularea manuală a sarcinilor"
                }
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("officeEquipment");
                  setOfficeEquipmentChecklistPage();
                }}
                checklistSelectionName={"birotică"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("office");
                  setOfficeChecklistPage();
                }}
                checklistSelectionName={"birouri"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("electrical");
                  setElectricalChecklistPage();
                }}
                checklistSelectionName={"electrice"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("workEquipment");
                  setWorkEquipmentChecklistPage();
                }}
                checklistSelectionName={"echipament individual de muncă"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("loto");
                  setLotoChecklistPage();
                }}
                checklistSelectionName={"LOTO"}
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
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("workAtHeight");
                  setWorkAtHeightChecklistPage();
                }}
                checklistSelectionName={"lucru la înălțime"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("workUsingLadders");
                  setWorkUsingLaddersChecklistPage();
                }}
                checklistSelectionName={"lucru pe scări"}
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("loadHandlingUsingStackerTruck");
                  setLoadHandlingUsingStackerTruckChecklistPage();
                }}
                checklistSelectionName={
                  "manipulare sarcini folosind transpaleta cu catarg"
                }
              />
            </li>
            <li>
              <ChecklistSelectionButton
                handleClick={() => {
                  initChecklistQuestions("loadHandlingUsingManualPalletTruck");
                  setLoadHandlingUsingManualPalletTruckChecklistPage();
                }}
                checklistSelectionName={
                  "manipulare sarcini folosind transpaleta mecanică"
                }
              />
            </li>
            <li>
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
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
