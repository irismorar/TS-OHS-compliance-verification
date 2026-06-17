import "./App.css";
import { HomePage } from "./HomePage";
import { ListsPage } from "./ListsPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationState = useComplianceVerificationState();

  return (
    <section className="max-h-dvh select-none">
      <HomePage {...complianceVerificationState} />
      <ListsPage {...complianceVerificationState} />
    </section>
  );
}
