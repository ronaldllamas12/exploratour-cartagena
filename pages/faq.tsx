'use client'

import { useState } from 'react'
import SEO from '../components/SEO'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Pregunta {
  id: number
  pregunta: string
  respuesta: string
}

const preguntas: Pregunta[] = [
  {
    id: 1,
    pregunta: '¿Cómo puedo reservar un tour?',
    respuesta: 'Puedes reservar fácilmente desde nuestra sección de contacto o escribiéndonos por WhatsApp.'
  },
  {
    id: 2,
    pregunta: '¿Qué incluye el precio del tour?',
    respuesta: 'Todos nuestros tours incluyen transporte, guía local y actividades según el destino.'
  },
  {
    id: 3,
    pregunta: '¿Puedo cancelar o reprogramar mi tour?',
    respuesta: 'Sí, puedes cancelar o reprogramar con al menos 48 horas de anticipación sin penalidad.'
  },
  {
    id: 4,
    pregunta: '¿Ofrecen descuentos para grupos?',
    respuesta: '¡Claro! Contáctanos directamente para obtener descuentos especiales para grupos.'
  }
]

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(null)

  const toggle = (id: number) => {
    setAbierto(abierto === id ? null : id)
  }

  return (
    <>
      <SEO title="ExploraTours" description="Resuelve tus dudas sobre nuestros servicios y toures." />
      

      <main className="max-w-3xl mx-auto p-6 mt-10 mb-20 animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97]">Preguntas Frecuentes</h1>

        <div className="space-y-4">
          {preguntas.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl p-4 border-l-4 border-[#831593] transition"
            >
              <button
                onClick={() => toggle(item.id)}
                className="flex justify-between items-center w-full text-left font-semibold text-gray-800"
              >
                <span>{item.pregunta}</span>
                {abierto === item.id ? <ChevronUp /> : <ChevronDown />}
              </button>

              {abierto === item.id && (
                <div className="mt-2 text-gray-600 transition-opacity duration-300 ease-in">
                  {item.respuesta}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

     
    </>
  )
}
