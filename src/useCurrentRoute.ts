import { useState } from "react";

export function useCurrentRoute() {
  const [currentRoute, setCurrentRoute] = useState<
    | "home"
    | "verificationChecklists"
    | "workshopChecklist"
    | "workplaceChecklist"
    | "biologicalAgentsChecklist"
    | "cancerousAgentsChecklist"
    | "chemicalAgentsChecklist"
    | "atexChecklist"
    | "asbestosChecklist"
    | "electromagneticFieldsChecklist"
    | "manualHandlingChecklist"
    | "sharpToolsChecklist"
    | "opticalRadiationChecklist"
    | "extremeTemperaturesChecklist"
    | "vibrationChecklist"
    | "noiseChecklist"
    | "internalAuditChecklist"
    | "maintenanceChecklist"
    | "manualHandlingOfLoadsAuditChecklist"
    | "workEquipmentChecklist"
    | "loadHandlingUsingStackerTruckChecklist"
    | "lotoChecklist"
    | "loadHandlingUsingManualPalletTruckChecklist"
    | "electricalChecklist"
    | "workAtHeightChecklist"
    | "workUsingLaddersChecklist"
    | "metalRackingChecklist"
    | "chemicalSubstanceChecklist"
    | "administrativeAreasChecklist"
    | "finalDocument"
  >("home");

  const setVerificationChecklistsPage = () => {
    setCurrentRoute("verificationChecklists");
  };

  const setWorkshopChecklistPage = () => {
    setCurrentRoute("workshopChecklist");
  };

  const setWorkplaceChecklistPage = () => {
    setCurrentRoute("workplaceChecklist");
  };

  const setBiologicalAgentsChecklistPage = () => {
    setCurrentRoute("biologicalAgentsChecklist");
  };

  const setCancerousAgentsChecklistPage = () => {
    setCurrentRoute("cancerousAgentsChecklist");
  };

  const setChemicalAgentsChecklistPage = () => {
    setCurrentRoute("chemicalAgentsChecklist");
  };

  const setAtexChecklistPage = () => {
    setCurrentRoute("atexChecklist");
  };

  const setAsbestosCkecklistPage = () => {
    setCurrentRoute("asbestosChecklist");
  };

  const setElectromagneticFieldsCkecklistPage = () => {
    setCurrentRoute("electromagneticFieldsChecklist");
  };

  const setManualHandlingChecklistPage = () => {
    setCurrentRoute("manualHandlingChecklist");
  };

  const setSharpToolsChecklistPage = () => {
    setCurrentRoute("sharpToolsChecklist");
  };

  const setOpticalRadiationChecklistPage = () => {
    setCurrentRoute("opticalRadiationChecklist");
  };

  const setExtremeTemperaturesChecklistPage = () => {
    setCurrentRoute("extremeTemperaturesChecklist");
  };

  const setVibrationChecklistPage = () => {
    setCurrentRoute("vibrationChecklist");
  };

  const setNoiseChecklistPage = () => {
    setCurrentRoute("noiseChecklist");
  };

  const setInternalAuditChecklistPage = () => {
    setCurrentRoute("internalAuditChecklist");
  };

  const setMaintenanceChecklistPage = () => {
    setCurrentRoute("maintenanceChecklist");
  };

  const setManualHandlingOfLoadsAuditChecklistPage = () => {
    setCurrentRoute("manualHandlingOfLoadsAuditChecklist");
  };

  const setWorkEquipmentChecklistPage = () => {
    setCurrentRoute("workEquipmentChecklist");
  };

  const setLoadHandlingUsingStackerTruckChecklistPage = () => {
    setCurrentRoute("loadHandlingUsingStackerTruckChecklist");
  };

  const setLotoChecklistPage = () => {
    setCurrentRoute("lotoChecklist");
  };

  const setLoadHandlingUsingManualPalletTruckChecklistPage = () => {
    setCurrentRoute("loadHandlingUsingManualPalletTruckChecklist");
  };

  const setElectricalChecklistPage = () => {
    setCurrentRoute("electricalChecklist");
  };

  const setWorkAtHeightChecklistPage = () => {
    setCurrentRoute("workAtHeightChecklist");
  };

  const setWorkUsingLaddersChecklistPage = () => {
    setCurrentRoute("workUsingLaddersChecklist");
  };

  const setMetalRackingChecklistPage = () => {
    setCurrentRoute("metalRackingChecklist");
  };

  const setChemicalSubstanceChecklistPage = () => {
    setCurrentRoute("chemicalSubstanceChecklist");
  };

  const setAdministrativeAreasChecklistPage = () => {
    setCurrentRoute("administrativeAreasChecklist");
  };

  const setDocumentPage = () => {
    setCurrentRoute("finalDocument");
  };

  return {
    currentRoute,
    setVerificationChecklistsPage,
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
    setDocumentPage,
  };
}
