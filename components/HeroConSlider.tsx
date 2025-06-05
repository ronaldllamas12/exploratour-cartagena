'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ShieldCheck, Star, CheckCircle, Subtitles } from 'lucide-react'
import Image from 'next/image'

const images = [
  {
    src: '/imagenes/familia feliz.jpg',
    alt: 'Familia Feliz',
    title: 'Descubre Cartagena  en Familia como nunca',
    subtitles: 'Tours exclusivos en los lugares más icónicos',
  },
  {
    src: '/imagenes/saltando.jpg',
    alt: 'Aventura en bote',
    title: 'Explora el Caribe con estilo',
    subtitles: 'Paseos en yate, islas y experiencias premium',
  },
  {
    src: '/imagenes/mujer-viajera-1200x840.jpg',
    alt: 'Mujer Viajera',

    title: 'Descubre Paisajes Increibles',
    subtitles: 'Tours guiados por los rincones históricos',
  },
]
export default function Hero(){
    const [index, setIndex] = useState(0)
    const whatsapp = '573022265668'

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length)
      }, 6000)
      return () => clearInterval(interval)
    }, [])

    const image = images[index]

    return (
      <section className="relative w-full h-screen overflow-hidden bg-black text-white-50">
        {/* Logo */}


        {/* Imagen de fondo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={image.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full z-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Overlay oscura */}
            <div className="absolute inset-0 bg-black-60 backdrop-blur-sm" />
          </motion.div>
        </AnimatePresence>

        {/* Etiqueta "Más popular" */}
        <div className="absolute top-16 right-6 bg-yellow-400 text-black-900 font-semibold px-3 py-2 rounded-full shadow-md text-xs z-20">
          🌟 Más popular
        </div>

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.h1
            key={image.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-extrabold drop-shadow-xl mb-2 text-white-50"
          >
            {image.title}
          </motion.h1>

          <motion.p
            key={image.subtitles}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-2xl mb-6 bg-black-30 px-4 py-2 rounded-lg drop-shadow-md"
          >
            {image.subtitles}
          </motion.p>

          {/* Botón de reserva */}
          <motion.a
            href={`https://wa.me/${whatsapp}?text=¡Hola! Quiero reservar un tour con ExploraTour`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 bg-gradient-to-r from-seance-600 to-seance-800 text-white-50 px-10 py-4 rounded-full text-lg font-bold shadow-lg transition"
          >
            <MessageCircle size={20} /> ¡Reserva ahora!
          </motion.a>

          {/* Prueba social */}
          <p className="text-black-800 text-md mt-4 italic">
            Más de <span className="font-bold text-seance-800">500 viajeros</span> felices con ExploraTour ✨
          </p>

          {/* Insignias de confianza */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-seance-600">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} /> Pago seguro
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} /> 4.8/5 en reseñas
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle size={16} /> Tours verificados
            </span>
          </div>
        </div>

        {/* Botón flotante: Ver todos los toures */}
        <a
          href="#toures"
          className="absolute bottom-6 right-6 bg-white-50 text-seance-800 font-semibold px-5 py-3 rounded-full shadow-xl hover:bg-seance-700 hover:text-white-50 transition animate-pulse"
        >
          Ver todos los toures
        </a>
      </section>
    )
  }

  
