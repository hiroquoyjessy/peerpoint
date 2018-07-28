import React from "react";

export const renderField = field => {
  const {
    meta: { touched, error }
  } = field;

  return (
    <div className="formGroup">
      <label htmlFor={field.input.name}>{field.label}</label>
      <input
        className={field.className}
        placeholder={field.placeholder}
        {...field.input}
      />
      <div className="formInputWarning">
        {touched && error && <span className="text-danger">{error}</span>}
      </div>
    </div>
  );
};
