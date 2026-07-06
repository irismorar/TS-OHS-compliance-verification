import { useCallback, useRef, useState } from "react";
import { RISK_FACTOR_COMBINATIONS } from "./data/RISK_FACTOR_COMBINATIONS";
import { WORKPLACE_QUESTION_DATA } from "./data/WORKPLACE_QUESTION_DATA";
import { WORKSHOP_QUESTION_DATA } from "./data/WORKSHOP_QUESTION_DATA";

type Question = {
  questionText: string;
  questionAnswer: boolean | null;
  safetyMeasure: string;
  severity: 1 | 2 | 3 | 4 | null;
  probability: 1 | 2 | 3 | 4 | null;
  additionalNotes: string;
};

export type QuestionCategory = {
  categoryName: string;
  questions: Question[];
};

export type QuestionData = {
  categoryName: string;
  questions: {
    questionText: string;
    safetyMeasure: string;
  }[];
}[];

const PROBABILITY_OPTIONS_BY_SEVERITY_WITH_NEGATIVE_ANSWER: Record<
  number,
  number[]
> = {
  1: [1, 2, 3, 4],
  2: [1, 2, 3, 4],
  3: [1, 2, 3],
  4: [1, 2],
};
const PROBABILITY_OPTIONS_BY_SEVERITY_WITH_POSITIVE_ANSWER: Record<
  number,
  number[]
> = {
  3: [4],
  4: [3, 4],
};

export function useQuestions() {
  const [questionCategories, setQuestionCategories] = useState<
    QuestionCategory[]
  >([]);

  const firstUnansweredQuestionRef = useRef<HTMLDivElement | null>(null);

  const firstUnansweredQuestionCategoryIndex = questionCategories.findIndex(
    (category) => {
      return category.questions.some((question) => {
        return (
          question.questionAnswer === null ||
          question.severity === null ||
          question.probability === null
        );
      });
    },
  );

  const firstUnansweredQuestionIndex =
    firstUnansweredQuestionCategoryIndex !== -1
      ? questionCategories[
          firstUnansweredQuestionCategoryIndex
        ].questions.findIndex((question) => {
          return (
            question.questionAnswer === null ||
            question.severity === null ||
            question.probability === null
          );
        })
      : -1;

  const areAllQuestionsAnswered = firstUnansweredQuestionCategoryIndex === -1;

  function initChecklistQuestions(checklistName: "workshop" | "workplace") {
    switch (checklistName) {
      case "workshop": {
        setQuestionCategories(stateifyQuestionData(WORKSHOP_QUESTION_DATA));
        break;
      }
      case "workplace": {
        setQuestionCategories(stateifyQuestionData(WORKPLACE_QUESTION_DATA));
        break;
      }
    }
  }

  const setQuestionAnswer = useCallback(
    (categoryIndex: number, questionIndex: number, answer: boolean) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.questionAnswer = answer;
            question.severity = null;
            question.probability = null;
            question.additionalNotes = "";
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionSeverity = useCallback(
    (
      categoryIndex: number,
      questionIndex: number,
      severity: 1 | 2 | 3 | 4 | null,
    ) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.severity = severity;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionProbability = useCallback(
    (
      categoryIndex: number,
      questionIndex: number,
      probability: 1 | 2 | 3 | 4 | null,
    ) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.probability = probability;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const setQuestionAdditionalNotes = useCallback(
    (categoryIndex: number, questionIndex: number, additionalNotes: string) => {
      setQuestionCategories((prevCategories) => {
        const updatedCategories = [...prevCategories];
        const category = updatedCategories[categoryIndex];
        if (category) {
          const question = category.questions[questionIndex];
          if (question) {
            question.additionalNotes = additionalNotes;
          }
        }
        return updatedCategories;
      });
    },
    [],
  );

  const computeSeverityOptions = useCallback(
    (categoryIndex: number, questionIndex: number) => {
      const category = questionCategories[categoryIndex];
      if (category) {
        const question = category.questions[questionIndex];
        return question.questionAnswer ? [3, 4] : [1, 2, 3, 4];
      }
    },
    [questionCategories],
  );

  const computeProbabilityOptions = useCallback(
    (categoryIndex: number, questionIndex: number) => {
      const category = questionCategories[categoryIndex];
      if (category) {
        const question = category.questions[questionIndex];
        return question.questionAnswer
          ? PROBABILITY_OPTIONS_BY_SEVERITY_WITH_POSITIVE_ANSWER[
              question.severity as number
            ] || []
          : PROBABILITY_OPTIONS_BY_SEVERITY_WITH_NEGATIVE_ANSWER[
              question.severity as number
            ] || [];
      }
    },
    [questionCategories],
  );

  const computeQuestionRiskFactor = useCallback(
    (categoryIndex: number, questionIndex: number) => {
      const category = questionCategories[categoryIndex];
      if (category) {
        const question = category.questions[questionIndex];
        if (
          question &&
          question.severity !== null &&
          question.probability !== null
        ) {
          const combination = RISK_FACTOR_COMBINATIONS.find(
            (item) =>
              item.severity === question.severity &&
              item.probability === question.probability,
          );
          return combination ? combination.riskFactor : null;
        }
      }
      return null;
    },
    [questionCategories],
  );

  return {
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
    computeSeverityOptions,
    computeProbabilityOptions,
    computeQuestionRiskFactor,
  };
}

function stateifyQuestionData(questionData: QuestionData) {
  return questionData.map((category) => ({
    categoryName: category.categoryName,
    questions: category.questions.map((question) => ({
      questionText: question.questionText,
      questionAnswer: null,
      safetyMeasure: question.safetyMeasure,
      severity: null,
      probability: null,
      additionalNotes: "",
    })),
  }));
}
