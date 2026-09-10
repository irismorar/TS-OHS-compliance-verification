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
          Alege categoria pentru care dorești să efectuezi verificarea SSM:
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
                initChecklistQuestions("maintenance");
                setMaintenanceChecklistPage();
              }}
              checklistSelectionName={"mentenanță"}
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
                initChecklistQuestions("workEquipment");
                setWorkEquipmentChecklistPage();
              }}
              checklistSelectionName={"echipament individual de muncă"}
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
                initChecklistQuestions("loto");
                setLotoChecklistPage();
              }}
              checklistSelectionName={"LOTO"}
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
                initChecklistQuestions("electrical");
                setElectricalChecklistPage();
              }}
              checklistSelectionName={"electrice"}
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
                initChecklistQuestions("metalRacking");
                setMetalRackingChecklistPage();
              }}
              checklistSelectionName={"rafturi metalice"}
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
                initChecklistQuestions("administrativeAreas");
                setAdministrativeAreasChecklistPage();
              }}
              checklistSelectionName={"spații administrative"}
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
                initChecklistQuestions("officeEquipment");
                setOfficeEquipmentChecklistPage();
              }}
              checklistSelectionName={"birotică"}
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

          <li>
            <h2 className="mt-15 mb-5 text-lg text-slate-500">
              Verificare generală SSM a riscurilor specifice:
            </h2>
          </li>
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
      </section>
    </main>
  );
}
