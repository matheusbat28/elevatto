import React from "react";
import styled from 'styled-components';
import fundo from '../../assets/fundo.jpg';
import { BsPerson } from "react-icons/bs";

export default function Login() {
  const Img = styled.img`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    `;

  const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
    `;

  return (
    <>
      <Img src={fundo} alt="fundo" />
      <FormLogin>
        <BsPerson size={100} color="white" />
        <input type="text" placeholder="Usuário" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
      </FormLogin>
    </>
  )
}