import React from "react";
import styled from 'styled-components';
import fundo from '../../assets/fundo.jpg';
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {

  const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100vh;
  `;

  const Img = styled.img`
    width: 100%;
    height: 100vh;
    opacity: 0.8;
    filter: blur(1.6px);
    object-fit: cover;
    `;

  const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.6);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    border-radius: 10px;
    `;

  const InputGroup = styled.div` 
    width: 300px;
    display: flex;
    height: 40px;
    margin: 5px;
  `;

  const InputPrepend = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 40px;
    background-color: #FEBD59;
    color: #fff;
    border-radius: 5px 0 0 5px;
  `;

  const Input = styled.input`
    border-radius: 0 5px 5px 0;
  `;

  const ForgotPassword = styled.div`
    width: 300px;
    display: flex;
    justify-content: flex-start;
    margin: 5px;
  `;

  const ForgotPasswordLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 12px;
    `;

  const Button = styled.button`
    width: 100px;
    height: 40px;
    margin: 5px;
    margin-top: 40px;
    border: none;
    background-color: #FEBD59;
    color: #fff;
    `;

  return (
    <Container >
      <Img src={fundo} alt="fundo" />
      <FormLogin>
        <InputGroup>
          <InputPrepend>
            <BsPerson />
          </InputPrepend>
          <Input type="text" placeholder="Usuário" className="form-control" />
        </InputGroup>
        <InputGroup>
          <InputPrepend>
            <RiLockPasswordLine />
          </InputPrepend>
          <Input type="password" placeholder="Senha" className="form-control" />
        </InputGroup>
        <ForgotPassword>
          <ForgotPasswordLink href="#">Esqueci minha senha?</ForgotPasswordLink>
        </ForgotPassword>
        <Button type="submit" >Entrar</Button>
      </FormLogin>
    </Container>
  )
}