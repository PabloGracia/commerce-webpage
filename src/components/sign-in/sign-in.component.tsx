import React from "react";

import "./sign-in.styles.scss";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

interface IProps {}
interface IState {
  email: string;
  password: string;
}

export interface IFormSignIn {
  name: string;
  type: "email" | "password";
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean | undefined;
}

export class SignIn extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
