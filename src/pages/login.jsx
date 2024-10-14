// src/pages/login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token); // Guarda el token
      navigate('/profile'); // Redirige a perfil si el login es exitoso
    } else {
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Ingreso</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Usuario</label>
          <input type="text" id="username" className="border border-gray-300 p-2 w-full rounded-md" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
          <input type="password" id="password" className="border border-gray-300 p-2 w-full rounded-md" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleLogin} className="bg-blue-500 text-white p-2 w-full rounded-md hover:bg-blue-600">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;