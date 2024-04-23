import React from "react";
import './login.css';
import fundo from '../../assets/fundo.jpg';
import { BsPerson } from "react-icons/bs";

export default function Login() {
  return (
    <>
      <img src={fundo} alt="fundo" />
      <form id="formLogin" >
        <div className="d-flex">
          <label htmlFor="email">
            <BsPerson />
          </label>
          <input type="email" id="email" name="email" required />
        </div>
      </form>
    </>
  )
}