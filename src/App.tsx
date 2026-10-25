import "./App.css";
import { StartAppPage } from "./components/pages/StartAppPage";
import { HomePage } from "./components/pages/HomePage";
import { VerificationChecklistsPage } from "./components/pages/VerificationChecklistsPage";
import { WorkplaceChecklistPage } from "./components/pages/WorkplaceChecklistPage";
import { WorkshopChecklistPage } from "./components/pages/WorkshopChecklistPage";
import { InternalAuditChecklistPage } from "./components/pages/InternalAuditChecklistPage";
import { MaintenanceChecklistPage } from "./components/pages/MaintenanceChecklistPage";
import { ManualHandlingOfLoadsAuditChecklistPage } from "./components/pages/ManualHandlingOfLoadsAudit";
import { WorkEquipmentChecklistPage } from "./components/pages/WorkEquipmentChecklistPage";
import { LoadHandlingUsingStackerTruckChecklistPage } from "./components/pages/LoadHandlingUsingStackerTruckChecklistPage";
import { LotoChecklistPage } from "./components/pages/LotoChecklistPage";
import { LoadHandlingUsingManualPalletTruckChecklistPage } from "./components/pages/LoadHandlingUsingManualPalletTruckChecklistPage";
import { ElectricalChecklistPage } from "./components/pages/ElectricalChecklistPage";
import { WorkAtHeightChecklistPage } from "./components/pages/WorkAtHeightChecklistPage";
import { WorkUsingLaddersChecklistPage } from "./components/pages/WorkUsingLaddersChecklistPage";
import { MetalRackingChecklistPage } from "./components/pages/MetalRackingChecklistPage";
import { ChemicalSubstanceChecklistPage } from "./components/pages/ChemicalSubstanceChecklistPage";
import { AdministrativeAreasChecklistPage } from "./components/pages/AdministrativeAreasChecklistPage";
import { OfficeChecklistPage } from "./components/pages/OfficeChecklistPage";
import { OfficeEquipmentChecklistPage } from "./components/pages/OfficeEquipmentChecklistPage";
import { HazardousAreasChecklistPage } from "./components/pages/HazardousAreasChecklistPage";
import { BiologicalAgentsChecklistPage } from "./components/pages/BiologicalAgentsChecklistPage";
import { CancerousAgentsChecklistPage } from "./components/pages/CancerousAgentsChecklistPage";
import { ChemicalAgentsChecklistPage } from "./components/pages/ChemicalAgentsChecklistPage";
import { AtexChecklistPage } from "./components/pages/AtexChecklistPage";
import { AsbestosChecklistPage } from "./components/pages/AsbestosChecklistPage";
import { ElectromagneticFieldsChecklistPage } from "./components/pages/ElectromagneticFieldsCkecklistPage";
import { ManualHandlingChecklistPage } from "./components/pages/ManualHandlingChecklistPage";
import { SharpToolsChecklistPage } from "./components/pages/SharpToolsChecklistPage";
import { OpticalRadiationChecklistPage } from "./components/pages/OpticalRadiationChecklistPage";
import { ExtremeTemperaturesChecklistPage } from "./components/pages/ExtremeTemperaturesChecklistPage";
import { VibrationChecklistPage } from "./components/pages/VibrationChecklistPage";
import { NoiseChecklistPage } from "./components/pages/NoiseChecklistPage";
import { FormDocumentPage } from "./components/pages/FormDocumentPage";

export default function App() {
  return (
    <main className="min-h-dvh select-none bg-fixed bg-[linear-gradient(to_bottom,#c4d8f0_0%,#96b9e6_25%,#6798d8_50%,#386eb8_75%,#173f76_100%)]">
      <StartAppPage />
      <HomePage />
      <VerificationChecklistsPage />
      <WorkplaceChecklistPage />
      <WorkshopChecklistPage />
      <InternalAuditChecklistPage />
      <MaintenanceChecklistPage />
      <ManualHandlingOfLoadsAuditChecklistPage />
      <WorkEquipmentChecklistPage />
      <LoadHandlingUsingStackerTruckChecklistPage />
      <LotoChecklistPage />
      <LoadHandlingUsingManualPalletTruckChecklistPage />
      <ElectricalChecklistPage />
      <WorkAtHeightChecklistPage />
      <WorkUsingLaddersChecklistPage />
      <MetalRackingChecklistPage />
      <ChemicalSubstanceChecklistPage />
      <AdministrativeAreasChecklistPage />
      <OfficeChecklistPage />
      <OfficeEquipmentChecklistPage />
      <HazardousAreasChecklistPage />
      <BiologicalAgentsChecklistPage />
      <CancerousAgentsChecklistPage />
      <ChemicalAgentsChecklistPage />
      <AtexChecklistPage />
      <AsbestosChecklistPage />
      <ElectromagneticFieldsChecklistPage />
      <ManualHandlingChecklistPage />
      <SharpToolsChecklistPage />
      <OpticalRadiationChecklistPage />
      <ExtremeTemperaturesChecklistPage />
      <VibrationChecklistPage />
      <NoiseChecklistPage />
      <FormDocumentPage />
    </main>
  );
}
