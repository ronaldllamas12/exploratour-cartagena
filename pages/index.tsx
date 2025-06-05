import SEO from '../components/SEO'
import React from "react";



import QuienesSomos from './quienes-somos'
import Servicios from './servicios'
import FAQ from './faq'
import Contacto from './contacto'
import Navbar from '../components/Navbar'
import Toures from './toures'
import HeroConSlider from '../components/HeroConSlider'
import Footer from '../components/Footer'
import PorqueElegirnos from './porque-elegirnos'
import SeccionTours from './toures1';


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

        {/* Secciones adicionales */}
        <SeccionTours/>
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
