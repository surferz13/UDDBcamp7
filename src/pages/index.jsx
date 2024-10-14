// src/pages/index.jsx
const Index = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Bienvenido a los mejores viajes de surf</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Aprende y desarrolla de la mejor manera tu surf.
        </p>
        {/* Nueva imagen */}
        <img src="../assets/surfers.jpg" alt="Imagen de surf" className="w-full h-auto mx-auto mb-8" />
        <div className="grid grid-cols-1 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pack Full Surftrip</h2>
            <p className="text-gray-600">
              Incluye clases, equipamiento, alojamiento por todo el fin de semana.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Pack Surfer Avanzado</h2>
            <p className="text-gray-600">
              Incluye equipamiento y alojamiento por todo el fin de semana. 
            </p>
          </div>
        </div>
        {/* Contenido adicional */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Vive la experiencia</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Descubre los mejores panoramas en un fin de semana lleno de aventura. 
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
          </ul>
        </div>
      </div>
      {/* Nuevo footer */}
      <footer className="bg-blue-700 text-white text-center p-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} SurfTrip Chile. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;