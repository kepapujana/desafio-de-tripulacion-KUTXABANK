import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import '../style/profile/login.css'; 
import logo from '../assets/logo-Kutxabank.svg'; 

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;

    const mockUser = {
        email: 'test@example.com',
        password: '123456'
    };

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (email === mockUser.email && password === mockUser.password) {
            notification.success({ message: 'Éxito', description: '¡Inicio de sesión exitoso!' });
            localStorage.setItem('user', JSON.stringify(formData));
            setTimeout(() => {
                navigate('/home');
            }, 500);
        } else {
            notification.error({ message: 'Error', description: 'Credenciales incorrectas' });
        }
    };

    return (
        <div className="login-container">
            <img src={logo} alt="Bank Logo" className="bank-logo" />
            <h1>Bienvenido</h1>
            <p>Ingrese su número de cuenta y contraseña para acceder a su cuenta.</p>

            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="Número de cuenta"
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={onChange}
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <div className="biometric-login">
                <button className="biometric-button" onClick={() => {
                    notification.success({ message: 'Éxito', description: '¡Inicio de sesión con Face ID exitoso!' });
                    setTimeout(() => {
                        navigate('/home');
                    }, 500);
                }}>
                    Iniciar sesión con Face ID
                </button>
            </div>
        </div>
    );
};

export default Login;
