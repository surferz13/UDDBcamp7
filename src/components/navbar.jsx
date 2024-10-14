import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Aquí puedes agregar una lógica para obtener el nombre de usuario si es necesario
      // Por ejemplo, si el nombre de usuario está almacenado en el localStorage
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // Eliminar el nombre de usuario si está almacenado
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Lado izquierdo del navbar */}
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">Surftrip Chile</Link>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Nosotros</Link>
              <Link to="/cart" className="bg-[#CCFF00] text-black px-3 py-2 rounded-md text-sm font-medium font-semibold">Reservar Pack</Link>
            </div>
          </div>
          {/* Lado derecho del navbar */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Mi Perfil ({username})</Link>
                <button onClick={handleLogout} className="bg-[#f6f7f6] hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
              </>
            ) : (
              <>
                <Link to="/signup" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Registrarse</Link>
                <Link to="/login" className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;