import { useComplianceVerificationContext } from "../../ComplianceVerificationContext";

export function QuestionsProgressBar() {
  const complianceVerificationContext = useComplianceVerificationContext();
  const { questionCategories } = complianceVerificationContext;

  const questions = questionCategories.flatMap(({ questions }) => questions);
  const answeredQuestionsCount = questions.filter(
    ({ questionAnswer, severity, probability }) =>
      questionAnswer !== null && severity !== null && probability !== null,
  ).length;
  const progressPercentage =
    questions.length > 0
      ? (answeredQuestionsCount / questions.length) * 100
      : 0;

  return (
    <div
      role="progressbar"
      aria-label="Întrebări completate"
      aria-valuemin={0}
      aria-valuemax={questions.length}
      aria-valuenow={answeredQuestionsCount}
      title={`${answeredQuestionsCount} / ${questions.length} întrebări completate`}
      className="fixed inset-x-0 top-0 z-40 h-1.5 bg-slate-950/20"
    >
      <div
        className="h-full bg-blue-600 transition-[width] duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
}
