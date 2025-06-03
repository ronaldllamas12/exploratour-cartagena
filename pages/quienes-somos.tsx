import React from 'react';
import SEO from '../components/SEO';


export default function QuienesSomos() {
  return (
    <>
      <SEO
        title="¿Quiénes somos? - ExploraTours"
        description="Conoce al equipo detrás de ExploraTours y nuestra pasión por mostrarte Colombia."
      />

      <main className="w-full py-16 px-6 text-white bg-[#f9e7ff]">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] mb-8 animate-fadeIn">
            ¿Quiénes somos?
          </h1>

          <p className="text-lg text-gray-700 mb-10 text-center max-w-3xl mx-auto">
            En <span className="font-bold text-[#4d0151]">ExploraTours</span> somos un equipo apasionado por compartir las maravillas de Colombia. Llevamos más de <strong>10 años</strong> diseñando experiencias únicas para que vivas la cultura, naturaleza y hospitalidad de nuestra tierra.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <img
              src="/imagenes/quienes-somos.jpg"
              alt="Nuestro equipo"
              className="rounded-xl shadow-xl object-cover w-full h-auto aspect-video transition-transform duration-300 hover:scale-105"
            />

            <div>
              <h2 className="text-2xl font-semibold text-[#4d0151] mb-3">Nuestra misión</h2>
              <p className="text-gray-700 mb-6">
                Crear recuerdos inolvidables a través de toures auténticos, seguros y llenos de cultura local. 
              </p>

              <h2 className="text-2xl font-semibold text-[#4d0151] mb-3">Nuestros valores</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Pasión por el turismo sostenible</li>
                <li>Compromiso con la seguridad y calidad</li>
                <li>Respeto por las comunidades locales</li>
                <li>Transparencia y atención personalizada</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/contacto"
              className="inline-block bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-white font-semibold px-8 py-4 rounded-full shadow-md hover:from-[#b113e6] hover:to-[#6a107f] transition duration-300"
            >
              ¡Conócenos más!
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

