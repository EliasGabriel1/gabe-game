import React, { useState, useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import './index.css'

const Login: React.FC = () => {
    const { state, login, setUser } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const handleLogin = () => {
        if (username) {
            login(username);
            setUser(username);
            navigate('/home');
        }
    };

    if (!state) {
        navigate('/home');
    }

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-box__content">
                    <h1>Login</h1>
                    <input
                        className="login-box__input"
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className='button-login' onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
