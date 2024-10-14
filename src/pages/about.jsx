// src/pages/about.jsx

const About = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Sobre Nosotros</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Somos una agencia de turismo especializada en viajes de surf, ofreciendo experiencias únicas y personalizadas para todos los niveles de surfistas.
        </p>
        <div className="flex justify-center mb-8">
          <img src="../assets/surf-group.jpg" alt="Grupo de surf" className="rounded-lg shadow-md max-w-lg" />
        </div>
        <p>
          Grupo de amigos que se conocieron en la universidad compartiendo la misma pasión por el surf y el deseo de estar viajando por distintos lugares de chile para disfrutar de sus paisajes y olas. 
          Desde el año 2009 que bajo la necesidad de hacer mas financiables los viajes, decidimos abrir las invitaciones a personas que quisieran aprender y compartir experiencia. 
        </p>
      </div>
    </div>
  );
};

export default About;