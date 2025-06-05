'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FormularioWhatsApp from '../components/FormularioWhatsApp'
import {
  Sparkles, Languages, Plane, Shield, ChefHat,
  Trees, Globe, CalendarDays, Camera, Users, X
} from 'lucide-react'

export default function Servicios() {
  const [mostrarModal, setMostrarModal] = useState(false)
  const [servicioSeleccionado, setServicioSeleccionado] = useState('')

  const servicios = [
    {
      id: 1,
      nombre: 'Toures Personalizados',
      descripcion: 'Diseñamos experiencias a medida según tus intereses, fechas y presupuesto.',
      icono: <Sparkles className="w-6 h-6 text-white-50" />
    },
    {
      id: 2,
      nombre: 'Guías Bilingües',
      descripcion: 'Guías profesionales en español e inglés que te acompañan durante todo el tour.',
      icono: <Languages className="w-6 h-6 text-white-50" />
    },
    {
      id: 3,
      nombre: 'Transporte y Traslados',
      descripcion: 'Incluye transporte privado o compartido desde tu hospedaje hasta el destino turístico.',
      icono: <Plane className="w-6 h-6 text-white-50" />
    },
    {
      id: 4,
      nombre: 'Paquetes Todo Incluido',
      descripcion: 'Alojamiento, alimentación, actividades y entradas en un solo paquete.',
      icono: <Shield className="w-6 h-6 text-white-50" />
    },
    {
      id: 5,
      nombre: 'Cultura y Gastronomía',
      descripcion: 'Clases de cocina, talleres artísticos y degustaciones para una inmersión auténtica.',
      icono: <ChefHat className="w-6 h-6 text-white-50" />
    },
    {
      id: 6,
      nombre: 'Naturaleza y Aventura',
      descripcion: 'Explora playas, selvas y montañas con actividades como senderismo o snorkel.',
      icono: <Trees className="w-6 h-6 text-white-50" />
    },
    {
      id: 7,
      nombre: 'Soporte 24/7',
      descripcion: 'Nuestro equipo está disponible en todo momento para ayudarte durante tu experiencia.',
      icono: <Globe className="w-6 h-6 text-white-50" />
    },
    {
      id: 8,
      nombre: 'Reserva Segura en Línea',
      descripcion: 'Paga con confianza a través de nuestra plataforma protegida y eficiente.',
      icono: <CalendarDays className="w-6 h-6 text-white-50" />
    },
    {
      id: 9,
      nombre: 'Fotografía Profesional',
      descripcion: 'Captura tus mejores momentos con fotógrafos expertos (servicio opcional).',
      icono: <Camera className="w-6 h-6 text-white-50" />
    },
    {
      id: 10,
      nombre: 'Viajes para Grupos',
      descripcion: 'Organizamos salidas para empresas, colegios o grupos grandes con logística completa.',
      icono: <Users className="w-6 h-6 text-white-50" />
    }
  ]

  const abrirModal = (nombre: string) => {
    setServicioSeleccionado(nombre)
    setMostrarModal(true)
  }

  const cerrarModal = () => setMostrarModal(false)

  return (
    <div className="p-6 max-w-7xl mx-auto mt-10 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97]">
        Nuestros Servicios
      </h1>
      <p className="text-center text-lg text-gray-900 mb-12 max-w-2xl mx-auto">
        En ExploraTours ofrecemos soluciones integrales para tu viaje: atención personalizada, logística completa y experiencias inolvidables.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <motion.div
            key={servicio.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-5 -left-5 bg-[#ca34ff] text-white p-3 rounded-full shadow-md">
              {servicio.icono}
            </div>
            <h2 className="text-2xl font-semibold text-[#790c97] mb-2 mt-6">
              {servicio.nombre}
            </h2>
            <p className="text-gray-700 mb-4">{servicio.descripcion}</p>
            <button
              onClick={() => abrirModal(servicio.nombre)}
              className="bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-white-50 px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
            >
              Contáctanos
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal con formulario */}
      {mostrarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md relative"
          >
            <button
              onClick={cerrarModal}
              className="absolute top-3 right-3 text-gray-700 hover:text-[#960cbf] transition"
            >
              <X size={30} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-black-900">
              Contáctanos por: {servicioSeleccionado}
            </h2>
            <FormularioWhatsApp mensajeInicial={servicioSeleccionado} />
          </motion.div>
        </div>
      )}
    </div>
  )
}
