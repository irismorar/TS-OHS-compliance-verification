import { useState } from "react";

export function useUnitDetails() {
  const [unitName, setUnitName] = useState("");
  const [unitIdentificationNumber, setUnitIdentificationNumber] = useState("");
  const [unitRegisteredOfficeAddress, setUnitRegisteredOfficeAddress] =
    useState("");
  const [verifiedSystemName, setVerifiedSystemName] = useState("");
  const [ssmWorkersNames, setSsmWorkersName] = useState("");
  const [preparedBy, setPreparedBy] = useState("");

  const areUnitDetailsFilled =
    unitName.trim() !== "" &&
    unitIdentificationNumber.trim() !== "" &&
    unitRegisteredOfficeAddress.trim() !== "";

  // Clears the current verification's details; the unit details are kept
  function resetVerificationDetails() {
    setVerifiedSystemName("");
    setSsmWorkersName("");
    setPreparedBy("");
  }

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
    ssmWorkersNames,
    setSsmWorkersName,
    preparedBy,
    setPreparedBy,
    resetVerificationDetails,
  };
}
