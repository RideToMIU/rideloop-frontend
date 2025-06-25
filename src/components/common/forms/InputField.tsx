import type { InputHTMLAttributes, ReactNode } from "react";

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  containerClass?: string;
  customInputClass?: string;
  error?: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}
const InputField = ({
  label,
  labelClass,
  containerClass,
  customInputClass,
  error = undefined,
  prefixIcon,
  suffixIcon,
  ...rest
}: IInputField) => (
  <fieldset
    className={`fieldset h-18 ${containerClass}`}
    id={`fieldset-${rest?.id}`}
  >
    <legend className={`fieldset-legend ${labelClass}`}>{label}</legend>
    <label htmlFor={rest?.id} className={`input ${customInputClass}`}>
      {prefixIcon}
      <input {...rest} className="block" />
      {suffixIcon}
    </label>
    {error ? <p className="label text-red-500">{error}</p> : null}
  </fieldset>
);

export default InputField;
