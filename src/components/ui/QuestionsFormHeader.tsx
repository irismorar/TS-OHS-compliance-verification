type Props = {
  checklistSelectionName: string;
};

export function QuestionsFormHeader({ checklistSelectionName }: Props) {
  return (
    <header className="flex flex-col items-center justify-center px-6 pt-10 pb-12 text-center">
      <h1 className="text-2xl font-bold tracking-tight text-blue-950 sm:text-3xl">
        Lista de verificare SSM pentru {checklistSelectionName}
      </h1>

      <p className="mt-3 text-sm text-slate-800 sm:text-base">
        Evaluează conformitatea, analizează riscurile și stabilește măsuri
        corective
      </p>
    </header>
  );
}
