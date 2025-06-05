'use client'

import { useEffect, useState } from 'react'
const whatsapp = '+573022265668' // reemplaza con tu número real

const slides = [
  { tipo: 'imagen', src: './imagenes/collage_horizontal_exploratours.png', alt: 'Slide 1' },
  
  // Puedes agregar videos como este:
  // { tipo: 'video', src: '/videos/intro.mp4', alt: 'Video Intro' },
]

export default function Galeria() {
  const [index, setIndex] = useState(0)

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length)

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000) // cambia cada 8 segundos
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute w-full mt-6 mb-8">
      <div className="overflow-hidden rounded-xl shadow-xl ">
        {slides[index].tipo === 'imagen' ? (
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full h-[600px] object-cover transition-all duration-1000 ease-in-out"
          />
        ) : (
          <video
            src={slides[index].src}
            className="w-full h-[600px] object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 z-10 text-xl"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/80 z-10 text-xl"
      >
        ›
      </button>

      {/* Botón Reserva Ya dentro del slider */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <a
          href={`https://wa.me/${whatsapp}?text=Hola, quiero reservar un tour con ExploraTour`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ca34ff] hover:bg-[#b113e6] text- px-8[#fffff] py-4 rounded-full text-lg font-bold shadow-xl animate-fadeIn"
        >
          ¡Reserva ya!
        </a>
      </div>
    </div>
  )
}

