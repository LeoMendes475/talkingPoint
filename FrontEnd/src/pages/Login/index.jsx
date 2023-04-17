import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode"

import './login.css'


export default function Login(width, height) {
    const [email, setEmail] = useState(null);
    const [userpassword, setUserPassword] = useState(null);
    let navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        try {

            const dados = { email, userpassword };
            const { data } = await api.post("/login", dados);

            console.log(dados)
            console.log(data)

            const dataToken = jwt_decode(data.token);

            sessionStorage.setItem("login", true);
            sessionStorage.setItem('email', email);

            alert("Seja bem-vindo!");
            navigate("/");

        } catch (err) {
            console.log(err);
            alert("Usuário ou senha invalidos!");
        }
    };

    const styleButton = {
        width: '176px',
        height: '45px',
        background: '#476EE6',
        color: '#fff',
        borderRadius: '60px',
        border: '1px solid'
      };

    return (
        <div className='login'>
            <div>
                <img className='imgLogin' src="images/login.png" alt="Login" title='Login'/>
            </div>
            <div className='userInfo'>
                <img className='logoLogin' src="src/images/png/logo.png" alt="Login" title='Login'/>
                <h1>Dados de acesso</h1>
                <form>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        required
                        id="email"
                        name="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder='Insira seu e-mail'
                    />
    
                    <label htmlFor='userpassword'>Senha</label>
                    <input
                        required
                        name="userpassword"
                        type="password"
                        id="userpassword"
                        onChange={(e) => { setUserPassword(e.target.value) }}
                        placeholder='Insira sua senha'
                    />
    
                    <div className='container-buttons'>
                        <button style={styleButton} onClick={handleLogin} type="submit">Entrar</button>
                        <a href='#'>Esqueceu a senha?</a>
                    </div>
    
                </form>
    
            </div>
        </div>
    );
}
