'use client'

import React, { useState } from 'react'
import FormularioWhatsApp from '../components/FormularioWhatsApp'
import { X } from 'lucide-react'

export default function Servicios() {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [servicioSeleccionado, setServicioSeleccionado] = useState('')

  const servicios = [
    {
      id: 1,
      nombre: 'Toures Personalizados',
      descripcion: 'Diseñamos experiencias a medida según tus intereses, fechas y presupuesto.'
    },
    {
      id: 2,
      nombre: 'Guías Bilingües',
      descripcion: 'Guías profesionales en español e inglés que te acompañan durante todo el tour.'
    },
    {
      id: 3,
      nombre: 'Transporte y Traslados',
      descripcion: 'Incluye transporte privado o compartido desde tu hospedaje hasta el destino turístico.'
    },
    {
      id: 4,
      nombre: 'Paquetes Todo Incluido',
      descripcion: 'Alojamiento, alimentación, actividades y entradas en un solo paquete.'
    },
    {
      id: 5,
      nombre: 'Cultura y Gastronomía',
      descripcion: 'Clases de cocina, talleres artísticos y degustaciones para una inmersión auténtica.'
    },
    {
      id: 6,
      nombre: 'Naturaleza y Aventura',
      descripcion: 'Explora playas, selvas y montañas con actividades como senderismo o snorkel.'
    },
    {
      id: 7,
      nombre: 'Soporte 24/7',
      descripcion: 'Nuestro equipo está disponible en todo momento para ayudarte durante tu experiencia.'
    },
    {
      id: 8,
      nombre: 'Reserva Segura en Línea',
      descripcion: 'Paga con confianza a través de nuestra plataforma protegida y eficiente.'
    },
    {
      id: 9,
      nombre: 'Fotografía Profesional',
      descripcion: 'Captura tus mejores momentos con fotógrafos expertos (servicio opcional).'
    },
    {
      id: 10,
      nombre: 'Viajes para Grupos',
      descripcion: 'Organizamos salidas para empresas, colegios o grupos grandes con logística completa.'
    }
  ]

  const abrirModal = (nombre: string) => {
    setServicioSeleccionado(nombre)
    setMostrarModal(true)
  }

  const cerrarModal = () => setMostrarModal(false)

  return (
    <div className="p-6 max-w-6xl mx-auto mt-10 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97]">
        Nuestros Servicios
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        En ExploraTours ofrecemos soluciones integrales para tu viaje: atención personalizada, logística completa y experiencias inolvidables.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {servicios.map(servicio => (
          <div
            key={servicio.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-[#790c97] mb-2">{servicio.nombre}</h2>
            <p className="text-gray-700 mb-4">{servicio.descripcion}</p>
            <button
              onClick={() => abrirModal(servicio.nombre)}
              className="bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-[#ffffff] px-4 py-2 rounded hover:scale-105 transition"
            >
              Contáctanos
            </button>
          </div>
        ))}
      </div>

      {/* Modal con formulario */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative animate-fadeIn">
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-[#ffffff] hover:text-[#ffffff]"
            >
              <X size={30} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#ffffff]">
              Contáctanos por: {servicioSeleccionado}
            </h2>
            <FormularioWhatsApp mensajeInicial={servicioSeleccionado} />
          </div>
        </div>
      )}
    </div>
  )
}
