import React from "react";

import "./custom-button.styles.scss";
import { CartActionTypes } from "../../redux/cart/cart.types";

interface IProps {
  type?: "submit" | "button";
}

export const CustomButton: React.FC<IProps & {
  onClick?: () =>
    | Promise<firebase.auth.UserCredential>
    | CartActionTypes
    | void;
  isGoogleSignIn?: boolean | undefined;
  inverted?: boolean;
}> = ({ children, isGoogleSignIn, inverted, ...rest }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...rest}
  >
    {children}
  </button>
);
