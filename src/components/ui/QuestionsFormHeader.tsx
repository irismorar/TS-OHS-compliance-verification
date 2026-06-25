import { ChevronsLeft } from "lucide-react";

type Props = {
  checklistSelectionName: string;
  handleClick: () => void;
};

export function QuestionsFormHeader({
  checklistSelectionName,
  handleClick,
}: Props) {
  return (
    <div className="mt-10 pb-20 relative flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-900">
        Lista de verificare SSM pentru {checklistSelectionName}
      </h1>

      <p className="mt-2 text-slate-600 text-lg">
        Evaluează conformitatea, analizează riscurile și stabilește măsuri
        corective
      </p>
      <button
        onClick={handleClick}
        className="absolute flex bottom-2 right-80 text-md text-slate-600 transition-all duration-100 hover:text-blue-600 hover:scale-105 hover:font-medium"
      >
        <ChevronsLeft />
        <span>înapoi</span>
      </button>
    </div>
  );
}
