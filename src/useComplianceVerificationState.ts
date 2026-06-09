import { useState } from "react";

export function useComplianceVerificationState() {
  const [page, setPage] = useState<"homePage" | "listsPage" | "formPage">(
    "homePage",
  );
  const [unitName, setUnitName] = useState("");
  const [JName, setJName] = useState("");
  const [registeredOfficeAdress, setRegisteredOfficeAdress] = useState("");
}
