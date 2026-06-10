type Props = {
  domainName: string;
  inputText: string;
  minLengthText: number;
  maxLengthText: number;
  handleChange: (argument: string) => void;
  handleCreateDomainValue: () => void;
};

export function UserInputItem({
  domainName,
  inputText,
  minLengthText,
  maxLengthText,
  handleChange,
  handleCreateDomainValue,
}: Props) {
  return (
    <>
      <label htmlFor="domain">{domainName}</label>
      <input
        type="text"
        id="domain"
        required
        minLength={minLengthText}
        maxLength={maxLengthText}
        value={inputText}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key === "Enter" && inputText.trim() !== "") {
            handleCreateDomainValue();
          }
        }}
      />
    </>
  );
}
