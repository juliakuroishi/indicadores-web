type InputFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Prop para capturar mudanças no input
};

export default function InputField({
  label,
  type,
  placeholder,
  onChange, // Adiciona a prop onChange
}: InputFieldProps) {
  return (
    <div className="mb-4" style={{ width: "320px" }}>
      <label className="block text-white sm:text-black text-sm font-medium sm:font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange} // Aplica a prop onChange ao input
        className="w-full px-4 py-2 rounded-md border border-colorBorder bg-white text-colorTextDark"
      />
    </div>
  );
}
