import { useState } from "react";

export function useUnitDetails() {
  const [unitName, setUnitName] = useState("");
  const [unitIdentificationNumber, setUnitIdentificationNumber] = useState("");
  const [unitRegisteredOfficeAddress, setUnitRegisteredOfficeAddress] =
    useState("");
  const [verifiedSystemName, setVerifiedSystemName] = useState("");
  const [isEditingVerifiedSystem, setIsEditingVerifiedSystem] = useState(true);
  const [ssmWorkersNames, setSsmWorkersName] = useState("");
  const [isEditingSsmWorkers, setIsEditingSsmWorkers] = useState(true);
  const [preparedBy, setPreparedBy] = useState("");
  const [isEditingPreparedBy, setIsEditingPreparedBy] = useState(true);

  const areUnitDetailsFilled =
    unitName.trim() !== "" &&
    unitIdentificationNumber.trim() !== "" &&
    unitRegisteredOfficeAddress.trim() !== "";

  return {
    unitName,
    setUnitName,
    unitIdentificationNumber,
    setUnitIdentificationNumber,
    unitRegisteredOfficeAddress,
    setUnitRegisteredOfficeAddress,
    areUnitDetailsFilled,
    verifiedSystemName,
    setVerifiedSystemName,
    isEditingVerifiedSystem,
    setIsEditingVerifiedSystem,
    ssmWorkersNames,
    setSsmWorkersName,
    isEditingSsmWorkers,
    setIsEditingSsmWorkers,
    preparedBy,
    setPreparedBy,
    isEditingPreparedBy,
    setIsEditingPreparedBy,
  };
}
