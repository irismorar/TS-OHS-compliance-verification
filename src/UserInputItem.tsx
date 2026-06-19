type Props = {
  domainName: string;
  inputText: string;
  minLengthText: number;
  maxLengthText: number;
  handleChange: (argument: string) => void;
};

export function UserInputItem({
  domainName,
  inputText,
  minLengthText,
  maxLengthText,
  handleChange,
}: Props) {
  return (
    <section className="w-full max-w-2xl flex items-center gap-6">
      <label
        htmlFor="domain"
        className="w-48 text-left text-xl font-semibold text-slate-800 select-none"
      >
        {domainName}
      </label>
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
        className="flex-1 rounded-xl border border-slate-300 bg-white/80 px-4 py-3 text-lg shadow-sm transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
      />
    </section>
  );
}
