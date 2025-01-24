type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string; disabled?: boolean }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const SelectField = ({
  label,
  name,
  value,
  options,
  onChange,
}: SelectFieldProps) => (
  <div>
    <label>
      {label}:
      <select name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);
