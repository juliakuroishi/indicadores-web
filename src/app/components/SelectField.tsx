interface SelectFieldProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({
  label,
  options,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="form-control mb-4 w-full">
      {/* Label para o Select */}
      <label className="block text-white sm:text-black text-sm font-medium sm:font-bold mb-2">
        {label}
      </label>

      {/* Select com classes do DaisyUI */}
      <select
        onChange={onChange}
        className="select select-bordered select-primary w-full bg-white text-gray-800 border-colorBorder"
        defaultValue="" // valor inicial
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
        {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
