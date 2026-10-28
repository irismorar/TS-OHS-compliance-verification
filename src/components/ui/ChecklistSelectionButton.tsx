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
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-left text-blue-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/60 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-blue-950/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
    >
      <div className="flex items-start flex-col">
        <h3 className="text-base font-semibold uppercase text-white sm:text-lg">
          {checklistSelectionName}
        </h3>

        <p className="text-sm text-slate-300">
          Verificare generală SSM pentru {checklistSelectionName}
        </p>
      </div>
      <SquareArrowRightEnter
        size={25}
        className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:scale-110"
      />
    </button>
  );
}
