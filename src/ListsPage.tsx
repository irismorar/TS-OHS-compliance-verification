type Props = {
  page: string;
  getWorkplaceFormPage: () => void;
  getWorkshopFormPage: () => void;
  getGeneralQuestionsPage: () => void;
};

export function ListsPage({
  page,
  getWorkplaceFormPage,
  getWorkshopFormPage,
  getGeneralQuestionsPage,
}: Props) {
  return (
    <>
      {page === "listsPage" && (
        <main>
          <ol>
            <li onClick={getGeneralQuestionsPage}>
              Întrebări generale despre SSM
            </li>
            <li onClick={getWorkshopFormPage}>Întrebări generale pe ATELIER</li>
            <li onClick={getWorkplaceFormPage}>
              Întrebări generale pe LOC DE MUNCĂ
            </li>
          </ol>
        </main>
      )}
    </>
  );
}
