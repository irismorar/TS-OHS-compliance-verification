import { useState } from "react";

export function useUnitDetails() {
  const [unitName, setUnitName] = useState("");
  const [unitIdentificationNumber, setUnitIdentificationNumber] = useState("");
  const [unitRegisteredOfficeAddress, setUnitRegisteredOfficeAddress] =
    useState("");

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
  };
}
