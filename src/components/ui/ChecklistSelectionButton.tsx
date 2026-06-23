import { SquareArrowRightEnter } from "lucide-react";

type Props = {
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  checklistSelectionName: string;
};

export function ChecklistSelectionButton({
  handleClick,
  checklistSelectionName,
}: Props) {
  return (
    <button
      onClick={handleClick}
      className="w-full group flex items-center justify-between text-xl rounded-2xl text-slate-500 border border-slate-200 px-6 py-5 transition-all duration-300 hover:border-gray-500 hover:bg-slate-50 hover:shadow-md hover:text-blue-600"
    >
      <div className="flex items-start flex-col">
        <h3 className="text-xl font-semibold uppercase text-slate-900">
          {checklistSelectionName}
        </h3>

        <p className="text-slate-500">
          Verificare generală SSM pentru {checklistSelectionName}
        </p>
      </div>
      <SquareArrowRightEnter
        size={25}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110"
      />
    </button>
  );
}
