// src/pages/signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      alert('Usuario creado con éxito');
      navigate('/'); // Redirige a index.jsx
    } else {
      alert('Error al crear el usuario');
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Registro</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Usuario</label>
          <input type="text" id="username" className="border border-gray-300 p-2 w-full rounded-md" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input type="text" id="email" className="border border-gray-300 p-2 w-full rounded-md" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
          <input type="password" id="password" className="border border-gray-300 p-2 w-full rounded-md" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleSignup} className="bg-blue-700 text-white p-2 w-full rounded-md hover:bg-blue-600">Registrarse</button>
      </form>
    </div>
  );
};

export default Signup;