import { Outlet } from "react-router";
import { QuestionsProgressBar } from "../ui/QuestionsProgressBar";

export function ChecklistPageLayout() {
  return (
    <>
      <QuestionsProgressBar />
      <Outlet />
    </>
  );
}
