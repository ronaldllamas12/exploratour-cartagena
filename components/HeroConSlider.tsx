'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const whatsapp = '+573022265668'

const cards = [
  {
    title: 'Escapadas encantadoras',
    description: 'Playas, islas e historia colonial',
    image: '/imagenes/familia feliz.jpg',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Estoy interesado en los toures de escapadas.`,
  },
  {
    title: 'Experiencias auténticas',
    description: 'Música, danza y sabores locales',
    image: '/imagenes/mujer-viajera-1200x840.jpg',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Cuéntame más sobre experiencias culturales.`,
  },
  {
    title: 'Tesoros escondidos',
    description: 'Descubre los secretos de Cartagena',
    image: '/imagenes/Cartagena-de-Indias_opt.jpg',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Quiero conocer los lugares escondidos de Cartagena.`,
  },
  {
    title: 'Combina tu aventura',
    description: 'Crea tu propio tour personalizado',
    image: '/imagenes/OIP.jpg',
    link: `https://wa.me/${whatsapp}?text=¡Hola! Quiero combinar mi propio tour personalizado.`,
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  const nextSlide = () => setIndex((prev) => (prev + 1) % cards.length)

  return (
    <section className="relative w-full h-[100vh] overflow-hidden text-[#ffffff]">
      {/* Fondo dinámico */}
      <AnimatePresence mode="wait">
        <motion.img
          key={cards[index].image}
          src={cards[index].image}
          alt={cards[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover "
        />
      </AnimatePresence>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Flechas laterales */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition"
        >
          <ChevronLeft size={35} />
        </button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm transition"
        >
          <ChevronRight size={35} />
        </button>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight text-[#ffffff]">
          Descubre momentos<br /> de viaje inolvidables
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
          Elige experiencias<br></br> únicas en Cartagena  
        </p>

        {/* Indicadores de slide */}
        <div className="flex gap-2 mb-8">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-white' : 'bg-white/40'
              } transition-all`}
            />
          ))}
        </div>

        {/* Botón de reserva con fondo blur */}
        <a
          href={`https://wa.me/${whatsapp}?text=¡Hola! Quiero reservar un tour con ExploraTour`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg transition hover:bg-white/30"
        >
          Reserva ahora!!
        </a>

        {/* CTA adicional */}
        <a
          href="#Toures"
          className="mt-4 inline-block text-white/90 hover:text-white text-base underline underline-offset-4 transition-all duration-300 font-semibold"
        >
          Ver todos los toures →
        </a>
      </div>
    </section>
  )
}
