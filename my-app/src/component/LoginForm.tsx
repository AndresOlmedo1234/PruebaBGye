// src/components/LoginForm.tsx
import React, { useState } from 'react';
import './LoginForm.css';
import { json } from 'stream/consumers';
import { useProduct } from '../hooks/useProduct';


const LoginForm: React.FC = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const {token,setToken} = useProduct();




  const handleUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [redirectToHome, setRedirectToHome] = useState(false);




  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de autenticación, por ejemplo, enviar los datos al servidor
    console.log('User', user);
    console.log('Password:', password);

    const Body = {
      usuarioNombre: user,
      contraseña: password
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Body)
    };


    try {
      fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => JSON.stringify(response)).then(response => setToken(response))
    } catch (error) {
      console.log("Error", error)
    }



  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <div className="form-group">
        <label htmlFor="email">Usuario:</label>
        <input
          type="text"
          id="email"
          value={user}
          onChange={handleUser}
          placeholder="Ingrese su correo electrónico"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Ingrese su contraseña"
          required
        />
      </div>
      <button type="submit">Iniciar Sesión

      </button>
    </form>
  );
};

export default LoginForm;
