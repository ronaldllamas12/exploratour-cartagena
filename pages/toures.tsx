'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const whatsapp = '573001112233' // reemplaza con tu número real

const tours = [
  {
    id: 1,
    nombre: 'Tour por las Islas del Rosario',
    descripcion: 'Navega en lancha rápida y disfruta de playas cristalinas y snorkel.',
    duracion: '8 horas',
    precio: '$150.000 COP',
    imagen: 'https://source.unsplash.com/800x600/?beach,caribbean'
  },
  {
    id: 2,
    nombre: 'City Tour por Cartagena',
    descripcion: 'Explora la historia, cultura y rincones ocultos de la ciudad amurallada.',
    duracion: '3 horas',
    precio: '$90.000 COP',
    imagen: 'https://source.unsplash.com/800x600/?cartagena,city'
  },
  {
    id: 3,
    nombre: 'Paseo en Chiva Rumbera',
    descripcion: 'Fiesta sobre ruedas con música, luces y bebidas típicas.',
    duracion: '2 horas',
    precio: '$70.000 COP',
    imagen: 'https://source.unsplash.com/800x600/?party,bus'
  }
]

export default function Tours() {
  const numeroWhatsApp = '573001112233' // reemplaza con tu número real

  const generarMensaje = (tour: string) =>
    `https://wa.me/${numeroWhatsApp}?text=¡Hola! Estoy interesado en el tour: ${encodeURIComponent(tour)}.`

  return (
    <div className="relative">
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
                  className="inline-block bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] hover:bg-[#ca34ff] text-[#ffffff] px-4 py-2 rounded-lg hover:scale-110 transition"
                  target="_blank"
                >
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ícono flotante de WhatsApp */}
      <a
        href={`https://wa.me/${numeroWhatsApp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 animate-bounce"
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  )
}
