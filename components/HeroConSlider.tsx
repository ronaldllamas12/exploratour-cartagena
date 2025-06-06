'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ShieldCheck, Star, CheckCircle } from 'lucide-react'

const images = [
  {
    src: '/familia-feliz.jpg',
    alt: 'Familia Feliz',
    title: 'Descubre Cartagena en Familia como nunca',
    subtitle: 'Tours exclusivos en los lugares más icónicos',
  },
  {
    src: '/cyty-tour.jpeg',
    alt: 'Aventura en bote',
    title: 'Explora el Caribe con estilo',
    subtitle: 'Paseos en yate, islas y experiencias premium',
  },
  {
    src: '/mujer-viajera-1200x840.jpg',
    alt: 'Mujer Viajera',
    title: 'Descubre Paisajes Increíbles',
    subtitle: 'Tours guiados por los rincones históricos',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const whatsapp = '+573022265668'

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white-50">
      {/* Imagen de fondo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="w-full h-full object-cover object-center absolute inset-0"
          />
          <div className="absolute inset-0 bg-black/60 " />
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-16 right-6 bg-yellow-400 text-black-900 font-semibold px-3 py-2 rounded-full shadow-md text-xs z-20">
        🌟 Más popular
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        {/* Banner de descuento */}
       

        <motion.h1
          key={images[index].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold drop-shadow-[1px_2px_0px_black] mb-2 text-white-50"
        >
          {images[index].title}
        </motion.h1>

        <motion.p
          key={images[index].subtitle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl font-extrabold drop-shadow-[1px_2px_0px_black] mb-2 text-white-50"
        >
          {images[index].subtitle}
        </motion.p>

        <motion.a
          href={`https://wa.me/${whatsapp}?text=¡Hola! Quiero reservar un tour con ExploraTour`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-gradient-to-r from-seance-600 to-seance-800 text-white-50 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition drop-shadow-[1px_1px_2px_black]"
        >
          <MessageCircle size={24} /> ¡Reserva ahora!
        </motion.a>

        <p className="text-white-50 text-md mt-4 italic drop-shadow-[0px_1px_0px_black]">
          Más de <span className="font-bold text-seance-800 drop-shadow-[2px_0px_0px_black]">500 viajeros</span> felices con ExploraTour ✨
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6 text-md text-seance-800 drop-shadow-[0px_0px_1px_white]">
          <span className="flex items-center gap-2">
            <ShieldCheck size={18} /> Pago seguro
          </span>
          <span className="flex items-center gap-2">
            <Star size={20} /> 4.8/5 en reseñas
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} /> Tours verificados
          </span>
        </div>
      </div>

      <a
        href="#toures"
        className="absolute bottom-6 right-6 bg-white-600 text-seance-800 font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-seance-700 hover:text-white-50 transition animate-pulse"
      >
        Ver todos los toures
      </a>
    </section>
  )
}
