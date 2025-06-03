import SEO from '../components/SEO'

import QuienesSomos from './quienes-somos'
import Servicios from './servicios'
import FAQ from './faq'
import Contacto from './contacto'
import Navbar from '../components/Navbar'
import Toures from './toures'
import HeroConSlider from '../components/HeroConSlider'
import Footer from '../components/Footer'
import PorqueElegirnos from './porque-elegirnos'


export default function Home() {
  return (
    <>
      <SEO
        title="Inicio - ExploraTours"
        description="ExploraTours ofrece experiencias turísticas únicas en Colombia."
        keywords="turismo, viajes, tours, Colombia, aventura"
        author="ExploraTours"
        url="https://www.exploratours.com"
        image="/imagenes/preview.jpg"
      />

      <Navbar />
      
      <HeroConSlider />

      <main className=" relative w-full  px-6 py-18 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] mb-8 animate-fadeIn text-center">
          Vive la aventura con ExploraTours
        </h1>

        <p className="text-lg md:text-xl text-black-900 mb-10 max-w-3xl mx-auto text-center">
          Ofrecemos <span className="font-semibold text-[#ca34ff]">toures inolvidables</span> por los destinos más impactantes de Colombia. Calidad, seguridad y experiencias auténticas.
        </p>

        {/* Grid de toures */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {[
            {
              titulo: 'Islas del Rosario',
              imagen: '/imagenes/Isla-del-Rosario-1024x508.jpg',
              descripcion: 'Un paraíso natural con aguas cristalinas y actividades acuáticas.',
            },
            {
              titulo: 'Cartagena',
              imagen: '/imagenes/cartagena.jpg',
              descripcion: 'Explora la ciudad amurallada, su historia y cultura vibrante.',
            },
            {
              titulo: 'Playa Blanca',
              imagen: '/imagenes/playa blanca.jpg',
              descripcion: 'Relájate en una de las playas más famosas de Barú.',
            },
          ].map(({ titulo, imagen, descripcion }) => (
            <div key={titulo} className="text-center bg-[#f7ceff] p-4 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={imagen}
                alt={titulo}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-seance-200">{titulo}</h3>
              <p className="text-black-900 text-sm">{descripcion}</p>
            </div>
          ))}
        </div>

        {/* Botón principal */}
        <div className="text-center">
          <a
            href="/contacto"
            className="inline-block bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-[#ffffff] font-bold px-8 py-4 rounded-full shadow-lg hover:from-[#b113e6] hover:via-[#790c97] hover:to-[#6a107f] transition duration-300 mb-8 hover:scale-105"
          >
            Contáctanos
          </a>
        </div>

        {/* Secciones adicionales */}
        <QuienesSomos />
        <Toures  />
        <Servicios />
        <PorqueElegirnos />
        <FAQ />
        <Contacto />
      </main>

      <Footer />
    </>
  )
}
