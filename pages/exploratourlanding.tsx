'use client'

import React from 'react'
import { FaWhatsapp, FaMapMarkedAlt, FaUsers, FaRegStar } from 'react-icons/fa'
import { motion } from 'framer-motion'

const whatsapp = '573001112233' // reemplaza con tu número real

const tours = [
  {
    nombre: 'Islas del Rosario',
    descripcion: 'Playas cristalinas, snorkel y almuerzo típico.',
    imagen: 'https://source.unsplash.com/600x400/?beach,caribbean',
    precio: '$150.000 COP'
  },
  {
    nombre: 'City Tour en Cartagena',
    descripcion: 'Recorrido por la ciudad amurallada con guía.',
    imagen: 'https://source.unsplash.com/600x400/?cartagena,city',
    precio: '$90.000 COP'
  },
  {
    nombre: 'Chiva Rumbera',
    descripcion: 'Fiesta en bus típico con música, luces y bebidas.',
    imagen: 'https://source.unsplash.com/600x400/?party,bus',
    precio: '$70.000 COP'
  }
]

export default function ExploraTourLanding() {
  return (
    <div className="font-sans text-[#2E2E2E]">
      {/* Hero */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white text-center px-4"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?tourism,beach')" }}
      >
        <div className="bg-[#612F74]/80 p-10 rounded-2xl shadow-xl max-w-xl">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ExploraTour
          </motion.h1>
          <p className="text-xl mb-6">¡Vive las mejores experiencias turísticas en Cartagena y alrededores!</p>
          <a
            href={`https://wa.me/${whatsapp}?text=Hola, quiero más información sobre los tours de ExploraTour`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3EB489] hover:bg-[#2fa67c] text-white px-6 py-3 rounded-xl text-lg font-semibold inline-block transition"
          >
            Reserva por WhatsApp
          </a>
        </div>
      </section>

      {/* Tours */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#612F74]">Tours Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-1"
            >
              <img src={tour.imagen} alt={tour.nombre} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#612F74]">{tour.nombre}</h3>
                <p className="text-gray-600 mt-2 mb-4">{tour.descripcion}</p>
                <span className="block mb-4 font-medium text-[#2E2E2E]">{tour.precio}</span>
                <a
                  href={`https://wa.me/${whatsapp}?text=Hola, me interesa el tour ${encodeURIComponent(tour.nombre)}`}
                  className="inline-block bg-[#612F74] hover:bg-[#DA70D6] text-white px-4 py-2 rounded-lg transition"
                  target="_blank"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ¿Por qué elegirnos? */}
      <section className="bg-[#E8DFF1] py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#612F74]">¿Por qué elegir ExploraTour?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <FaMapMarkedAlt className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Experiencias Locales</h3>
              <p>Guías locales que conocen cada rincón especial.</p>
            </div>
            <div>
              <FaUsers className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Tours Personalizados</h3>
              <p>Elige tu propio ritmo, horario y lugares.</p>
            </div>
            <div>
              <FaRegStar className="mx-auto text-[#DA70D6] text-4xl mb-4" />
              <h3 className="font-bold text-lg">Calificaciones Excelentes</h3>
              <p>Clientes felices y recomendaciones reales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#612F74]">Vive la experiencia</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src={`https://source.unsplash.com/300x300/?travel,tourism,beach&sig=${i}`}
              className="rounded-lg object-cover w-full h-48"
              alt="Tour"
            />
          ))}
        </div>
      </section>

      {/* Botón flotante WhatsApp */}
      <a
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-[#3EB489] hover:bg-[#2fa67c] text-white p-4 rounded-full shadow-xl z-50 transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Footer */}
      <footer className="bg-[#612F74] text-white text-center py-6">
        © {new Date().getFullYear()} ExploraTour. Todos los derechos reservados.
      </footer>
    </div>
  )
}
