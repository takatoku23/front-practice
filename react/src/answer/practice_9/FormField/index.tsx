type FormFieldProps = {
  label: string;
  name: string;
  value: string | number;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormField = ({
  label,
  name,
  value,
  type,
  onChange,
}: FormFieldProps) => (
  <div>
    <label>
      {label}:
      <input type={type} name={name} value={value} onChange={onChange} />
    </label>
  </div>
);
