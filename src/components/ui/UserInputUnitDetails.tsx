type Props = {
  domainName: string;
  inputText: string;
  minLengthText: number;
  maxLengthText: number;
  placeholderText: string;
  handleChange: (argument: string) => void;
};

export function UserInputUnitDetails({
  domainName,
  inputText,
  minLengthText,
  maxLengthText,
  placeholderText,
  handleChange,
}: Props) {
  return (
    <section className="w-full max-w-2xl flex items-center">
      <label
        htmlFor={`domain-${domainName}`}
        className="w-48 text-left text-lg font-semibold text-slate-800 select-none"
      >
        {domainName}
      </label>
      <input
        type="text"
        id={`domain-${domainName}`}
        required
        minLength={minLengthText}
        maxLength={maxLengthText}
        value={inputText}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        placeholder={placeholderText}
        className="w-100 rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-lg shadow-sm placeholder-slate-300 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
      />
    </section>
  );
}
