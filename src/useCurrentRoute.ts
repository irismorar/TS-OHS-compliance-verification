import { useState } from "react";

export function useCurrentRoute() {
  const [currentRoute, setCurrentRoute] = useState<
    | "home"
    | "verificationChecklists"
    | "workshopChecklist"
    | "workplaceChecklist"
  >("home");

  const getVerificationChecklistsPage = () => {
    setCurrentRoute("verificationChecklists");
  };

  const getWorkshopChecklistPage = () => {
    setCurrentRoute("workshopChecklist");
  };

  const getWorkplaceChecklistPage = () => {
    setCurrentRoute("workplaceChecklist");
  };

  return {
    currentRoute,
    getVerificationChecklistsPage,
    getWorkshopChecklistPage,
    getWorkplaceChecklistPage,
  };
}
