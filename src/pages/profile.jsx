import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  // Verifica si el token está presente en el localStorage
  const token = localStorage.getItem('token');
  if (!token) {
    // Si no hay token, redirige al usuario a la página de inicio de sesión
    navigate('/login');
    return null;
  }

  // Datos de ejemplo para el perfil y el historial de compras
  const userProfile = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    membership: 'Frecuente',
    joinedDate: '2024-05-01',
  };

  const purchaseHistory = [
    { id: 1, product: 'Surftrip Avanzado', date: '2024-10-10', amount: 49990 },
    { id: 2, product: 'Surftrip Full', date: '2024-08-11', amount: 69990 },
    { id: 3, product: 'Surftrip Full', date: '2024-05-12', amount: 69990 },
  ];

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold text-center mb-6">Mi Perfil</h1>
      <div className="mb-4">
        <div className="flex flex-col mb-2">
          <p className="text-lg font-medium">Nombre: {userProfile.name}</p>
          <p className="text-lg font-medium">Email: {userProfile.email}</p>
          <p className="text-lg font-medium">Membresía: {userProfile.membership}</p>
          <p className="text-lg font-medium">Fecha de registro: {userProfile.joinedDate}</p>
        </div>
      </div>
      <h2 className="text-xl font-bold text-center mb-4">Historial de Compras</h2>
      <div className="divide-y divide-gray-200">
        {purchaseHistory.map((purchase) => (
          <div key={purchase.id} className="py-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">Producto: {purchase.product}</p>
              <p className="text-lg font-medium">Fecha: {purchase.date}</p>
            </div>
            <p className="text-lg font-medium text-right">Monto: ${purchase.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;