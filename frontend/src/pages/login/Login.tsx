import React from "react";
import styled from 'styled-components';
import fundo from '../../assets/fundo.jpg';
import { BsPerson } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { getTokens, getUserLogged } from "../../controls/requests";
import Alert from "../../components/alert";
import { requestsError } from "../../controls/functions";
import { useNavigate } from "react-router-dom";

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
  width: 120px;
  height: 40px;
  margin: 5px;
  margin-top: 40px;
  border: none;
  background-color: #FEBD59;
  color: #fff;
`;

export default function Login() {

  document.title = 'Elevatto | Login';

  const navigate = useNavigate();
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [alert, setAlert] = React.useState<{ message: string, type: string }>({ message: '', type: '' });
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    getTokens(username, password).then((response) => {
      localStorage.setItem('access', response.access);
      localStorage.setItem('refresh', response.refresh);
      console.log(response);
      getUserLogged().then((response) => {
        localStorage.setItem('user', JSON.stringify(response));
      });
      setLoading(false);
      navigate('/');
    }).catch((error) => {
      setAlert({ message: requestsError(error.response.data), type: 'danger' });
      setLoading(false);
    });
  };

  return (
    <Container >
      <Img src={fundo} alt="fundo" />
      <FormLogin onSubmit={handleSubmit}>
        <InputGroup>
          <InputPrepend>
            <BsPerson />
          </InputPrepend>
          <Input required type="text" placeholder="Usuário" className="form-control" onChange={(e) => setUsername(e.target.value.trim())} />
        </InputGroup>
        <InputGroup>
          <InputPrepend>
            <RiLockPasswordLine />
          </InputPrepend>
          <Input required type="password" placeholder="Senha" className="form-control" onChange={(e) => setPassword(e.target.value.trim())} />
        </InputGroup>
        <ForgotPassword>
          <ForgotPasswordLink href="#">Esqueci minha senha?</ForgotPasswordLink>
        </ForgotPassword>
        <Button type="submit" >{loading ? 'Carregando...' : 'Entrar'}</Button>
      </FormLogin>
      {alert.message && <Alert message={alert.message} type={alert.type} />}
    </Container>
  )
}