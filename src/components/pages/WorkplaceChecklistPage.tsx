import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { QUESTION_DEFAULT_ANSWER } from "../../data/QUESTION_DEFAULT_ANSWER";
import {
  PROBABILITY_LABELS,
  SEVERITY_LABELS,
} from "../RiskTable/RISK_TABLE_LABELS";
import { QuestionCard } from "../ui/QuestionCard";
import { QuestionsFormMain } from "../ui/QuestionsFormMain";
import { QuestionsFormHeader } from "../ui/QuestionsFormHeader";
import { RiskTable } from "../RiskTable/RiskTable";
import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";
import { useNavigate } from "react-router";

export function WorkplaceChecklistPage() {
  const complianceVerificationContext = useComplianceVerificationContext();
  const navigate = useNavigate();

  const {
    questionCategories,
    firstUnansweredQuestionCategoryIndex,
    firstUnansweredQuestionIndex,
    areAllQuestionsAnswered,
    firstUnansweredQuestionRef,
    computeQuestionRiskFactor,
    setQuestionAnswer,
    setQuestionSeverity,
    setQuestionProbability,
    setQuestionAdditionalNotes,
  } = complianceVerificationContext;

  const [activeRiskTable, setActiveRiskTable] = useState<{
    categoryIndex: number;
    questionIndex: number;
    pendingAnswer: boolean;
  } | null>(null);

  const questionToScrollToRef = useRef<{
    categoryIndex: number;
    questionIndex: number;
  } | null>(null);

  // Runs after the risk table closes, so the card already shows its risk summary
  useEffect(() => {
    if (questionToScrollToRef.current === null) {
      return;
    }

    const { categoryIndex, questionIndex } = questionToScrollToRef.current;
    questionToScrollToRef.current = null;
    document
      .getElementById(`question-${categoryIndex}-${questionIndex}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  return (
    <>
      <QuestionsFormHeader checklistSelectionName="loc de muncă" />
      <QuestionsFormMain
        handleClickForward={() => {
          if (areAllQuestionsAnswered) {
            navigate("/raport-verificare");
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
              <h2 className="mb-6 border-b border-white/15 pb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
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
                      return "border border-green-400/40 bg-green-400/20 text-green-200";
                    case "MEDIU":
                      return "border border-amber-400/40 bg-amber-400/20 text-amber-200";
                    case "EXTREM":
                      return "border border-red-400/40 bg-red-400/20 text-red-200";
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

                const showAdditionalNotesInput =
                  riskFactor === "EXTREM" || riskFactor === "MEDIU";

                return (
                  <QuestionCard
                    key={questionIndex}
                    id={`question-${categoryIndex}-${questionIndex}`}
                    unansweredQuestionRef={
                      firstUnansweredQuestionCategoryIndex === categoryIndex &&
                      firstUnansweredQuestionIndex === questionIndex
                        ? firstUnansweredQuestionRef
                        : undefined
                    }
                  >
                    {/* QUESTION TEXT AND YES/NO BUTTONS */}
                    <div className="flex items-center gap-4">
                      <p className="flex-1 text-base font-medium leading-relaxed text-white sm:text-lg">
                        {questionText}
                      </p>
                      <div className="w-32 flex gap-1">
                        <button
                          className={`flex-1 rounded-xl py-2.5 text-sm font-bold uppercase transition-all duration-200 ${questionAnswer === true ? "bg-green-500 text-white shadow-lg" : "border border-white/40 bg-white/30 text-white hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/50"}`}
                          onClick={() => {
                            setActiveRiskTable({
                              categoryIndex,
                              questionIndex,
                              pendingAnswer: true,
                            });
                          }}
                        >
                          da
                        </button>
                        <button
                          className={`flex-1 rounded-xl py-2.5 text-sm font-bold uppercase transition-all duration-200 ${questionAnswer === false ? "bg-red-500 text-white shadow-lg" : "border border-white/40 bg-white/30 text-white hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/50"}`}
                          onClick={() => {
                            setActiveRiskTable({
                              categoryIndex,
                              questionIndex,
                              pendingAnswer: false,
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
                        <section className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm">
                          <RiskTable
                            onCommitRiskValues={(
                              newSeverity,
                              newProbability,
                            ) => {
                              if (
                                newSeverity === null ||
                                newProbability === null
                              ) {
                                return;
                              }

                              setQuestionAnswer(
                                categoryIndex,
                                questionIndex,
                                activeRiskTable.pendingAnswer,
                              );
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
                              questionToScrollToRef.current = {
                                categoryIndex,
                                questionIndex,
                              };
                            }}
                            onClose={() => {
                              setActiveRiskTable(null);
                            }}
                            userAnswer={activeRiskTable.pendingAnswer}
                          />
                        </section>,
                        document.body,
                      )}

                    {activeRiskTable === null &&
                      probability !== null &&
                      severity !== null && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          {/* QUESTION RISK ASSESSMENT */}
                          <div
                            className={`flex flex-col gap-4 rounded-xl border border-white/10 bg-slate-950/30 p-4 text-slate-200 ${
                              showAdditionalNotesInput ? "" : "col-span-2"
                            }`}
                          >
                            <div>
                              <span>Gravitate: </span>
                              <span className="rounded-lg font-bold text-blue-300">
                                {SEVERITY_LABELS[severity]}
                              </span>
                            </div>
                            <div>
                              <span>Probabilitate: </span>
                              <span className="rounded-lg font-bold text-blue-300">
                                {PROBABILITY_LABELS[probability]}
                              </span>
                            </div>
                            <div>
                              {riskFactor !== null && (
                                <>
                                  Nivel risc:{" "}
                                  <span
                                    className={`rounded-lg px-3 py-1 text-sm font-bold ${riskFactorBadgeClass}`}
                                  >
                                    {riskFactor}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          {/* QUESTION ADDITIONAL NOTE */}
                          {showAdditionalNotesInput && (
                            <textarea
                              id={`additionalNotes-${categoryIndex}-${questionIndex}`}
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
                                "h-37 w-full rounded-xl border border-white/20 bg-white/90 p-4 text-sm text-slate-900 shadow-sm transition-all duration-200 placeholder:text-slate-500 hover:bg-white focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                              }
                            />
                          )}

                          {/* QUESTION MEASURES */}
                          {measuresPriorityLevel !== null && (
                            <div
                              className={`col-span-2 rounded-xl p-4 text-sm font-bold ${riskFactorBadgeClass}`}
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
                          )}
                        </div>
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
