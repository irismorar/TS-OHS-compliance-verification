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
    setDocumentPage,
  };
}
