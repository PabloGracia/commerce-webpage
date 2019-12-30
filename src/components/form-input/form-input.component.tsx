import React from "react";

import "./form-input.styles.scss";

import { IFormSignIn } from "../sign-in/sign-in.component";

export const FormInput: React.FC<{ label?: string } & IFormSignIn> = ({
  handleChange,
  label,
  ...rest
}) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...rest} />
    {label ? (
      <label
        className={`${rest.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);
