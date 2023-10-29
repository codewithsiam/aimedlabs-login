// LoginStyles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const DesktopView = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;

export const FormContainer = styled.div`
  width: 50%;
  padding: 40px;
  background: #f5f5f5;
  @media (max-width: 768px) {
    width: 100%;
    background: transparent;
    border-radius: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.h2`
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

export const InputSection = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const PasswordShowButton = styled.button`
  position: absolute;
  top: 70%;
  right: 20px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: calc(100% - 30px);
`;

export const Label = styled.label`
  color: #333;
  font-weight: 550;
  margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  width: 70%;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  background-color: #1976d2;
  outline: none;
  margin: 0 auto;

  &:hover {
    background-color: #0d47a1;
  }
`;

export const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CheckBoxGroup = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 13px;
`;

export const CheckBoxInput = styled.input`
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 13px;
`;

export const CustomLink = styled.a`
  color: #F78719;
  text-decoration: none;
`;
