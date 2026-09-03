import { createPortal } from "react-dom";
import { useState } from "react";
import { QUESTION_DEFAULT_ANSWER } from "../../data/QUESTION_DEFAULT_ANSWER";
import type { useComplianceVerificationState } from "../../useComplianceVerificationState";
import { QuestionCard } from "../ui/QuestionCard";
import { QuestionsFormMain } from "../ui/QuestionsFormMain";
import { QuestionsFormHeader } from "../ui/QuestionsFormHeader";
import { RiskTable } from "../RiskTable/RiskTable";

type Props = ReturnType<typeof useComplianceVerificationState>;

export function ManualHandlingChecklistPage({
  currentRoute,
  questionCategories,
  firstUnansweredQuestionCategoryIndex,
  firstUnansweredQuestionIndex,
  areAllQuestionsAnswered,
  firstUnansweredQuestionRef,
  setVerificationChecklistsPage,
  setDocumentPage,
  computeQuestionRiskFactor,
  setQuestionAnswer,
  setQuestionSeverity,
  setQuestionProbability,
  setQuestionAdditionalNotes,
}: Props) {
  const [activeRiskTable, setActiveRiskTable] = useState<{
    categoryIndex: number;
    questionIndex: number;
  } | null>(null);

  if (currentRoute !== "manualHandlingChecklist") {
    return null;
  }

  return (
    <>
      <QuestionsFormHeader checklistSelectionName="manipularea manuală a maselor" />
      <QuestionsFormMain
        handleClickBack={setVerificationChecklistsPage}
        handleClickForward={() => {
          if (areAllQuestionsAnswered) {
            setDocumentPage();
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
      >
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
                      return "bg-amber-100 text-amber-500";
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
                          onClick={() => {
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              true,
                            );
                            setActiveRiskTable({
                              categoryIndex,
                              questionIndex,
                            });
                          }}
                        >
                          da
                        </button>
                        <button
                          className={`flex-1 rounded-xl py-2.5 font-bold text-white uppercase transition-all duration-200 ${questionAnswer === false ? "bg-red-500 shadow-lg" : "bg-gray-300 hover:text-red-500"}`}
                          onClick={() => {
                            setQuestionAnswer(
                              categoryIndex,
                              questionIndex,
                              false,
                            );
                            setActiveRiskTable({
                              categoryIndex,
                              questionIndex,
                            });
                          }}
                        >
                          nu
                        </button>
                      </div>
                    </div>

                    {activeRiskTable?.categoryIndex === categoryIndex &&
                      activeRiskTable?.questionIndex === questionIndex &&
                      createPortal(
                        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                          <RiskTable
                            onCommitRiskValues={(
                              newSeverity,
                              newProbability,
                            ) => {
                              setQuestionSeverity(
                                categoryIndex,
                                questionIndex,
                                newSeverity,
                              );
                              setQuestionProbability(
                                categoryIndex,
                                questionIndex,
                                newProbability,
                              );
                            }}
                            onClose={() => {
                              setActiveRiskTable(null);
                            }}
                            userAnswer={questionAnswer}
                          />
                        </section>,
                        document.body,
                      )}

                    {activeRiskTable === null &&
                      probability !== null &&
                      severity !== null && (
                        <>
                          {/* QUESTION RISK ASSESSMENT */}
                          <div className="flex items-center gap-4 mt-3 p-4">
                            <div className="w-48">
                              <span className="mr-2">Gravitate:</span>
                              <span className="rounded-lg border border-slate-300 bg-white px-3 py-1 font-semibold">
                                {severity ?? ""}
                              </span>
                            </div>
                            <div className="w-48">
                              <span className="mr-2">Probabilitate:</span>
                              <span className="rounded-lg border border-slate-300 bg-white px-3 py-1 font-semibold">
                                {probability ?? ""}
                              </span>
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
                                <div>
                                  <span className="uppercase">
                                    {measuresPriorityLevel}:
                                  </span>
                                  <p className="mt-3 font-medium">
                                    {questionAnswer
                                      ? QUESTION_DEFAULT_ANSWER
                                      : safetyMeasure}
                                  </p>
                                </div>
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
      </QuestionsFormMain>
    </>
  );
}
