import { useCurrentRoute } from "./useCurrentRoute";
import { useUnitDetails } from "./useUnitDetails";
import { useQuestions } from "./useQuestions";

export function useComplianceVerificationState() {
  const {
    currentRoute,
    setVerificationChecklistsPage,
    setWorkshopChecklistPage,
    setWorkplaceChecklistPage,
    setFinalPage,
  } = useCurrentRoute();
  const {
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,
    verifiedAreaName,
    setVerifiedAreaName,
    isEditingVerifiedArea,
    setIsEditingVerifiedArea,
    ssmWorkersNames,
    setSsmWorkersName,
    isEditingSsmWorkers,
    setIsEditingSsmWorkers,
    preparedBy,
    setPreparedBy,
    isEditingPreparedBy,
    setIsEditingPreparedBy,
  } = useUnitDetails();
  const {
    questionCategories,
    firstUnansweredQuestionCategoryIndex,
    firstUnansweredQuestionIndex,
    areAllQuestionsAnswered,
    firstUnansweredQuestionRef,
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
    setFinalPage,

    // unit details
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,
    verifiedAreaName,
    setVerifiedAreaName,
    isEditingVerifiedArea,
    setIsEditingVerifiedArea,
    ssmWorkersNames,
    setSsmWorkersName,
    isEditingSsmWorkers,
    setIsEditingSsmWorkers,
    preparedBy,
    setPreparedBy,
    isEditingPreparedBy,
    setIsEditingPreparedBy,

    // questions
    questionCategories,
    firstUnansweredQuestionCategoryIndex,
    firstUnansweredQuestionIndex,
    areAllQuestionsAnswered,
    firstUnansweredQuestionRef,
    initChecklistQuestions,
    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    setQuestionAdditionalNotes,
    computeQuestionRiskFactor,
  };
}
