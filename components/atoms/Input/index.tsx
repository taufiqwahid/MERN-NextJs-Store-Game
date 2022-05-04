import React from "react";
interface InputProps {
  title: string;
  type: string;
  htmlFor: string;
  name: string;
  id: string;
  placeholder: string;
}
export default function Input(props: InputProps) {
  const { title, type, htmlFor, name, id, placeholder, ...nativeProps } = props;
  return (
    <div className="pt-30">
      <label
        htmlFor={htmlFor}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {title}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={id}
        name={name}
        aria-describedby={name}
        placeholder={placeholder}
        {...nativeProps}
      />
    </div>
  );
}
