import { useState, type FormEvent, type ReactNode } from "react";

const Form = ({
  children,
  onSubmit,
  customClass,
}: {
  children: (errors: any) => ReactNode;
  onSubmit: (data: any) => void;
  customClass?: string;
}) => {
  const [errors, setErrors] = useState<any>({});
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setErrors({});
    event.preventDefault();
    const formTarget = event.currentTarget;
    let isValid = true;
    const formData = {} as any;
    const formErrors = {} as any;

    const elements = Array.from(formTarget.getElementsByTagName("input"));

    elements?.forEach((element: HTMLInputElement) => {
      const { value, checked, files, id, type, validationMessage } = element;
      if (element.checkValidity()) {
        if (type === "file") {
          console.log(files);
          //TODO: Handle file
        } else if (type === "checkbox") {
          formData[id] = checked;
        } else if (type == "radio") {
          formData[id] = value === "on";
        } else {
          formData[id] = value.trim() !== "" ? value : undefined;
        }
      } else {
        formErrors[id] = validationMessage;
        isValid = false;
      }
    });

    if (isValid) {
      console.log("Submitting:", { formData });
      onSubmit(formData);
      formTarget.reset();
    } else {
      console.log(formErrors);
      setErrors(formErrors);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`flex flex-col gap-2 ${customClass || ""}`}
    >
      {children(errors)}
    </form>
  );
};

export default Form;
