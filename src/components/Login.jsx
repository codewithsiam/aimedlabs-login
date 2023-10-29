// Login.js
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImage from "../../public/login-image.png";
import {
  Container,
  DesktopView,
  ImageContainer,
  Image,
  FormContainer,
  Form,
  FormTitle,
  InputSection,
  Label,
  Input,
  PasswordShowButton,
  SubmitButton,
  RegisterLink,
  CheckBoxContainer,
  CheckBoxGroup,
  CheckBoxInput,
  CustomLink,
} from "./LoginStyles";

const Login = () => {
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginIdChange = (e) => {
    setloginId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", { loginId, password });
    // Your login logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleLogin = () => {
    // Google login logic
  };

  return (
    <Container>
      <DesktopView>
        <ImageContainer>
          <Image src={loginImage} alt="Login Image" />
        </ImageContainer>
        <FormContainer>
          <Form onSubmit={onSubmit}>
            <FormTitle>Login</FormTitle>
            <InputSection>
              <Label>Login ID</Label>
              <Input
                type="loginId"
                value={loginId}
                onChange={handleLoginIdChange}
                placeholder="Your loginId"
              />
            </InputSection>
            <InputSection>
              <Label>Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Your password"
              />
              <PasswordShowButton
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </PasswordShowButton>
            </InputSection>

            <CheckBoxContainer>
              <CheckBoxGroup>
                <div>
                  <CheckBoxInput type="checkbox" id="terms" name="terms" />
                  <label>Agree to <CustomLink href="/">Terms & Conditions</CustomLink></label>
                </div>
                <div>
                  <CheckBoxInput
                    type="checkbox"
                    id="remember"
                    name="remember"
                  />
                  <label>Remember Me</label>
                </div>
              </CheckBoxGroup>

              <CustomLink href="/">Change Password</CustomLink>
            </CheckBoxContainer>

            <SubmitButton type="submit">Log In</SubmitButton>
          </Form>
          <RegisterLink>
            Don’t have an account?<CustomLink to="/register"> Register Here </CustomLink>
          </RegisterLink>
        </FormContainer>
      </DesktopView>
    </Container>
  );
};

export default Login;
