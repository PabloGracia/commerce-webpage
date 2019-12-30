import React from "react";

import "./custom-button.styles.scss";

interface IProps {
  type?: "submit" | "button";
}

export const CustomButton: React.FC<IProps & {
  onClick?: () => Promise<firebase.auth.UserCredential>;
  isGoogleSignIn?: boolean | undefined;
}> = ({ children, isGoogleSignIn, ...rest }) => (
  <button
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
    {...rest}
  >
    {children}
  </button>
);
