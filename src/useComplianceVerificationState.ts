import { useCurrentRoute } from "./useCurrentRoute";
import { useUnitDetails } from "./useUnitDetails";
import { useQuestions } from "./useQuestions";

export function useComplianceVerificationState() {
  const {
    currentRoute,
    setVerificationChecklistsPage,
    setWorkshopChecklistPage,
    setWorkplaceChecklistPage,
  } = useCurrentRoute();
  const {
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,
  } = useUnitDetails();
  const {
    questionCategories,
    initChecklistQuestions,
    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    setQuestionAdditionalNotes,
    computeQuestionRiskFactor,
  } = useQuestions();

  return {
    // route
    currentRoute,
    setVerificationChecklistsPage,
    setWorkshopChecklistPage,
    setWorkplaceChecklistPage,

    // unit details
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,

    // questions
    questionCategories,
    initChecklistQuestions,
    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    setQuestionAdditionalNotes,
    computeQuestionRiskFactor,
  };
}
