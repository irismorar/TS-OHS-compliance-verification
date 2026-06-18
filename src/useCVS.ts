import { useCurrentRoute } from "./useCurrentRoute";
import { useUnitDetails } from "./useUnitDetails";
import { useQuestions } from "./useQuestions";

export function useCVS() {
  const { currentRoute, setCurrentRoute } = useCurrentRoute();
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
    computeQuestionRiskFactor,
  } = useQuestions();

  return {
    // route
    currentRoute,
    setCurrentRoute,

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
    computeQuestionRiskFactor,
  };
}
