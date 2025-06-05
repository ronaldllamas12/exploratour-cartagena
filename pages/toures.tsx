'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const whatsapp = '+573022265668'

const tours = [
  {
    id: 1,
    nombre: 'Tour por las Islas del Rosario',
    descripcion: 'Navega en lancha rápida y disfruta de playas cristalinas y snorkel.',
    duracion: '8 horas',
    precio: '$150.000 COP',
    imagen: '/imagenes/saltando.jpg',
    beneficios: ['⛵ Lancha rápida', '🤿 Snorkel', '🏖️ Playas cristalinas'],
    popular: true,
  },
  {
    id: 2,
    nombre: 'City Tour por Cartagena',
    descripcion: 'Explora la historia, cultura y rincones ocultos de la ciudad amurallada.',
    duracion: '3 horas',
    precio: '$90.000 COP',
    imagen: '/imagenes/paseo en coche.jpg',
    beneficios: ['🏛️ Historia', '📸 Paradas para fotos', '🚶 Recorrido guiado'],
    popular: false,
  },
  {
    id: 3,
    nombre: 'Paseo en Chiva Rumbera',
    descripcion: 'Fiesta sobre ruedas con música, luces y bebidas típicas.',
    duracion: '2 horas',
    precio: '$70.000 COP',
    imagen: '/imagenes/chiva-rumbera.jpeg',
    beneficios: ['🎶 Música', '🍹 Bebidas típicas', '🚌 Chiva festiva'],
    popular: false,
  },
  {
    id: 4,
    nombre: 'Tour Gastronómico',
    descripcion: 'Conoce la deliciosa comida local con un recorrido por los mejores restaurantes y mercados.',
    duracion: '2 horas',
    precio: '$70.000 COP',
    imagen: '/imagenes/gastronomia_0.jpg',
    beneficios: ['🍽️ Degustaciones', '🛍️ Mercados locales', '👨‍🍳 Experiencia culinaria'],
    popular: false,
  }
]

export default function Tours() {
  const numeroWhatsApp = '573001112233'

  return (
    <div className="relative">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#612F74]">Tours Destacados</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {tours.map((tour, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl shadow-md hover:shadow-xl hover:bg-[#f8f3fb] transition transform hover:-translate-y-1"
            >
              {tour.popular && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white-50 px-2 py-1 text-xs rounded-full shadow">
                  ⭐ Más vendido
                </span>
              )}
              <img src={tour.imagen} alt={tour.nombre} className="w-full h-54 object-cover rounded-t-2xl" />
              <div className="p-6">
                <span className="inline-block bg-[#ff5c5c] text-white-50 text-sm px-8 py-2 rounded-full mb-2">
                  ¡Cupos limitados!
                </span>
                <h3 className="text-xl font-bold text-[#612F74]">{tour.nombre}</h3>
                <p className="text-sm text-[#612F74] font-semibold mb-2">Duración: {tour.duracion}</p>
                <p className="text-gray-600 text-sm mb-4">{tour.descripcion}</p>

                <ul className="text-sm text-gray-600 mb-4 flex flex-wrap gap-2">
                  {tour.beneficios.map((b, j) => (
                    <li key={j} className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                      {b}
                    </li>
                  ))}
                </ul>

                <span className="block mb-4 font-medium text-[#2E2E2E]">{tour.precio}</span>

                <a
                  href={`https://wa.me/${whatsapp}?text=Hola, me interesa el tour ${encodeURIComponent(tour.nombre)}`}
                  className="inline-block bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-white-50 px-20 py-4 rounded-lg hover:scale-110 transition animate-pulse"
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
        className="fixed bottom-6 right-6 bg-green-800 hover:bg-green-600 text-white-50 rounded-full p-4 shadow-lg z-50 animate-bounce"
        title="Contáctanos por WhatsApp"
      >
        <FaWhatsapp size={50} />
      </a>
    </div>
  )
}
