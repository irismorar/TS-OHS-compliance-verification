import { QUESTION_DEFAULT_ANSWER } from "../../data/QUESTION_DEFAULT_ANSWER";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";
import { QuestionCard } from "../ui/QuestionCard";
import { QuestionsFormMain } from "../ui/QuestionsFormMain";
import { QuestionsFormHeader } from "../ui/QuestionsFormHeader";
import { ChevronsRight } from "lucide-react";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function WorkplaceChecklistPage({
  currentRoute,
  questionCategories,
  firstUnansweredQuestionCategoryIndex,
  firstUnansweredQuestionIndex,
  areAllQuestionsAnswered,
  firstUnansweredQuestionRef,
  setVerificationChecklistsPage,
  setFinalPage,
  computeQuestionRiskFactor,
  setQuestionAnswer,
  setQuestionSeverity,
  setQuestionProbability,
  computeSeverityOptions,
  computeProbabilityOptions,
  setQuestionAdditionalNotes,
}: Props) {
  if (currentRoute !== "workplaceChecklist") {
    return null;
  }

  return (
    <>
      <QuestionsFormHeader
        checklistSelectionName="loc de muncă"
        handleClick={setVerificationChecklistsPage}
      />
      <QuestionsFormMain>
        {questionCategories.map((category, categoryIndex) => {
          const { categoryName, questions } = category;

          return (
            <section key={categoryIndex} className="mt-10">
              <h2 className="mb-6 pb-3 text-2xl font-bold text-slate-800">
                {categoryName}
              </h2>
              {questions.map((question, questionIndex) => {
                const {
                  questionText,
                  questionAnswer,
                  safetyMeasure,
                  severity,
                  probability,
                  additionalNotes,
                } = question;

                const SEVERITY_OPTIONS =
                  computeSeverityOptions(categoryIndex, questionIndex) || [];

                const PROBABILITY_OPTIONS =
                  computeProbabilityOptions(categoryIndex, questionIndex) || [];

                const riskFactor = computeQuestionRiskFactor(
                  categoryIndex,
                  questionIndex,
                );

                const getRiskFactorBadgeClass = (
                  risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                ): string => {
                  switch (risk) {
                    case "SCĂZUT":
                      return "bg-green-100 text-green-700";
                    case "MEDIU":
                      return "bg-orange-100 text-orange-500";
                    case "EXTREM":
                      return "bg-red-100 text-red-700";
                    default:
                      return "";
                  }
                };

                const riskFactorBadgeClass =
                  getRiskFactorBadgeClass(riskFactor);

                const getMeasuresPriorityLevel = (
                  risk: "EXTREM" | "MEDIU" | "SCĂZUT" | null,
                ): string | null => {
                  switch (risk) {
                    case "SCĂZUT":
                      return "Menținerea măsurii";
                    case "MEDIU":
                      return "Măsură prioritară";
                    case "EXTREM":
                      return "Măsură imediată";
                    default:
                      return null;
                  }
                };

                const measuresPriorityLevel =
                  getMeasuresPriorityLevel(riskFactor);

                return (
                  <QuestionCard
                    key={questionIndex}
                    unansweredQuestionRef={
                      firstUnansweredQuestionCategoryIndex === categoryIndex &&
                      firstUnansweredQuestionIndex === questionIndex
                        ? firstUnansweredQuestionRef
                        : undefined
                    }
                  >
                    {/* QUESTION TEXT AND YES/NO BUTTONS */}
                    <div className="flex items-center gap-4">
                      <p className="flex-1 text-lg font-medium leading-relaxed text-slate-900">
                        {questionText}
                      </p>
                      <div className="w-32 flex gap-1">
                        <button
                          className={`flex-1 rounded-xl py-2.5 font-bold text-white uppercase transition-all duration-200 ${questionAnswer === true ? "bg-green-500 shadow-lg" : "bg-gray-300 hover:text-green-500 "}`}
                          onClick={() =>
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              true,
                            )
                          }
                        >
                          da
                        </button>
                        <button
                          className={`flex-1 rounded-xl py-2.5 font-bold text-white uppercase transition-all duration-200 ${questionAnswer === false ? "bg-red-500 shadow-lg" : "bg-gray-300 hover:text-red-500"}`}
                          onClick={() =>
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              false,
                            )
                          }
                        >
                          nu
                        </button>
                      </div>
                    </div>

                    {questionAnswer !== null && (
                      <>
                        {/* QUESTION RISK ASSESSMENT */}
                        <div className="flex items-center gap-4 mt-3 p-4">
                          <div
                            className={`${probability !== null ? "opacity-50" : "opacity-100"} w-48`}
                          >
                            <label
                              htmlFor={`severity-${categoryIndex}-${questionIndex}`}
                              className="mr-2"
                            >
                              Gravitate:
                            </label>
                            <select
                              id={`severity-${categoryIndex}-${questionIndex}`}
                              disabled={probability !== null}
                              className={`${probability !== null ? "cursor-not-allowed" : "cursor-default"} w-fit rounded-lg border border-slate-300 bg-white px-2 py-1 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                              value={severity ?? ""}
                              onChange={(event) =>
                                setQuestionSeverity(
                                  categoryIndex,
                                  questionIndex,
                                  event.target.value
                                    ? (Number(event.target.value) as
                                        | 1
                                        | 2
                                        | 3
                                        | 4)
                                    : null,
                                )
                              }
                            >
                              <option value=""></option>
                              {SEVERITY_OPTIONS.map((option) => {
                                return (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div
                            className={`${severity === null ? "opacity-50" : "opacity-100"} w-48`}
                          >
                            <label
                              htmlFor={`probability-${categoryIndex}-${questionIndex}`}
                              className="mr-2"
                            >
                              Probabilitate:
                            </label>
                            <select
                              id={`probability-${categoryIndex}-${questionIndex}`}
                              disabled={severity === null}
                              className={`${severity === null ? "cursor-not-allowed" : "cursor-default"} w-fit rounded-lg border border-slate-300 bg-white px-2 py-1 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200`}
                              value={probability ?? ""}
                              onChange={(event) =>
                                setQuestionProbability(
                                  categoryIndex,
                                  questionIndex,
                                  event.target.value
                                    ? (Number(event.target.value) as
                                        | 1
                                        | 2
                                        | 3
                                        | 4)
                                    : null,
                                )
                              }
                            >
                              <option value=""></option>
                              {PROBABILITY_OPTIONS.map((option) => {
                                return (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                          <div className="flex-1">
                            {riskFactor !== null && (
                              <>
                                Nivel risc:{" "}
                                <span
                                  className={`rounded-lg px-3 py-1 text-sm font-bold shadow-md ${riskFactorBadgeClass}`}
                                >
                                  {riskFactor}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {measuresPriorityLevel !== null && (
                          <>
                            {/* QUESTION MEASURES*/}
                            <div
                              className={`mt-4 rounded-xl p-4 text-sm font-bold shadow-lg ${riskFactorBadgeClass}`}
                            >
                              <p>
                                <span className="uppercase">
                                  {measuresPriorityLevel}:
                                </span>
                                <p className="mt-3 font-medium">
                                  {questionAnswer
                                    ? QUESTION_DEFAULT_ANSWER
                                    : safetyMeasure}
                                </p>
                              </p>
                            </div>
                          </>
                        )}

                        {(riskFactor === "EXTREM" ||
                          riskFactor === "MEDIU") && (
                          <>
                            {/* QUESTION ADDITIONAL NOTE */}
                            <textarea
                              id={`additionalNotes-${categoryIndex}-${questionIndex}`}
                              rows={2}
                              cols={65}
                              value={additionalNotes ?? ""}
                              onChange={(event) => {
                                setQuestionAdditionalNotes(
                                  categoryIndex,
                                  questionIndex,
                                  event.target.value,
                                );
                              }}
                              placeholder="Adaugă observații..."
                              className={
                                "w-full mt-4 rounded-lg border border-slate-300 bg-white p-4 text-sm shadow-lg focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200"
                              }
                            />
                          </>
                        )}
                      </>
                    )}
                  </QuestionCard>
                );
              })}
            </section>
          );
        })}
        <button
          onClick={() => {
            if (areAllQuestionsAnswered) {
              setFinalPage();
            } else {
              alert(
                "Vă rugăm să răspundeți la toate întrebările înainte de a continua.",
              );
              firstUnansweredQuestionRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
            }
          }}
          className="absolute flex bottom-15 right-80 text-md text-slate-300 transition-all duration-100 hover:text-blue-600 hover:scale-105 hover:font-medium"
        >
          <span>înainte</span>
          <ChevronsRight />
        </button>
      </QuestionsFormMain>
    </>
  );
}
