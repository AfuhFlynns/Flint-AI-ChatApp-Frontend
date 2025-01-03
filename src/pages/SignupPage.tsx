import { Link } from "react-router-dom";
import {
  Button,
  Input,
  ModalHeading,
  PasswordStrengthCriteria,
  PasswordStrengthMeter,
  SocialConnections,
} from "../components";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleInputChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-text">
      <div className="modal">
        <ModalHeading text="Create an Account" className="text-center" />
        <form>
          <div className="input-row">
            <label htmlFor="username" className="modal-text">
              Username
            </label>
            <div>
              <Input
                type="text"
                placeholder="Username"
                value={formData.username}
                name="username"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="email" className="modal-text">
              Email Address
            </label>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                name="email"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="password" className="modal-text">
              Password
            </label>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          <div className="input-row">
            <label htmlFor="confirmPassword" className="modal-text">
              Confirm Password
            </label>
            <div>
              <Input
                type="password"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={(name, value) => handleInputChange(name, value)}
              />
            </div>
          </div>
          {/* Password confirm validation */}
          {formData.confirmPassword !== "" &&
            formData.password !== formData.confirmPassword && (
              <p className={`text-muted-text text-red-500 mb-4`}>
                Passwords don't match
              </p>
            )}
          {/* Password strength meter */}
          {formData.password !== "" && (
            <PasswordStrengthMeter password={formData.password} />
          )}

          {/* Password strength criteria */}
          {formData.password !== "" && (
            <>
              <p className="modal-text">Must contain: </p>
              <PasswordStrengthCriteria password={formData.password} />
            </>
          )}
          <Button text="Sign Up" type="submit" onClick={() => {}} />
          <div className="flex flex-row items-center justify-center my-4 h-[3rem] md:h-[2.6rem] w-full relative">
            <div className="absolute flex flex-row items-center justify-center w-auto h-full px-2 text-md bg-primary-bg-light dark:bg-neutral-dark-grey-dark">
              <span className="modal-text !text-muted-text">
                Or continue with
              </span>
            </div>
            <hr className="w-full border-solid border-neutral-light-grey-light dark:border-neutral-light-grey-dark border-opacity-30 h-[3.5px] dark:border-opacity-50" />
          </div>
          <SocialConnections />
        </form>
        <footer className="mt-4 text-center modal-text !text-muted-text">
          Already have an account?{" "}
          <Link
            to="/log-in"
            className="dark:text-primary-accent-blue-dark text-primary-accent-blue-light hover:underline"
          >
            Login
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default SignupPage;
