type Props = {
  checklistSelectionName: string;
};

export function QuestionsFormHeader({ checklistSelectionName }: Props) {
  return (
    <div className="mt-10 pb-20 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-slate-900">
        Lista de verificare SSM pentru {checklistSelectionName}
      </h1>

      <p className="mt-2 text-slate-600 text-lg">
        Evaluează conformitatea, analizează riscurile și stabilește măsuri
        corective
      </p>
    </div>
  );
}
