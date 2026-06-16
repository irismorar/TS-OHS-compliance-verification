import "./App.css";
import { HomePage } from "./HomePage";
import { ListsPage } from "./ListsPage";
import { useComplianceVerificationState } from "./useComplianceVerificationState";

export default function App() {
  const complianceVerificationState = useComplianceVerificationState();

  return (
    <section className="bg-gray-500">
      <HomePage {...complianceVerificationState} />
      <ListsPage {...complianceVerificationState} />
    </section>
  );
}
