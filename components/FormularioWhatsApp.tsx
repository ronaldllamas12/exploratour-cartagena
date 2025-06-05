'use client'

import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa'

interface Props {
  mensajeInicial?: string
}

export default function FormularioWhatsApp({ mensajeInicial = '' }: Props) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (mensajeInicial) {
      setMensaje(`Hola, estoy interesado en el servicio de: ${mensajeInicial}`)
    }
  }, [mensajeInicial])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensajeWhatsApp = `Hola, soy ${nombre}.\nMi correo es: ${email}.\nMensaje: ${mensaje}\nNúmero de contacto: ${numero}`
    const numeroDestino = '+573022265668'

    window.open(`https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank')

    emailjs.send(
      'service_ppalzk5',
      'template_ct22rmg',
      { nombre, email, mensaje, numero },
      'VoEFlVA5w6IEFD9vj'
    ).then(
      () => alert('¡Mensaje enviado por correo y WhatsApp!'),
      (error) => alert('Error al enviar correo: ' + error.text)
    )

    setNombre('')
    setEmail('')
    setMensaje('')
    setNumero('')
  }

  return (
    <div className="backdrop-blur-xl bg-white/50 border border-[#e6baff] shadow-xl rounded-3xl p-8 w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[#960cbf]" />
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#ca34ff]/30 focus:ring-2 focus:ring-[#ca34ff] outline-none bg-white bg-opacity-70 transition-all duration-300"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-[#960cbf]" />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#ca34ff]/30 focus:ring-2 focus:ring-[#ca34ff] outline-none bg-white bg-opacity-70 transition-all duration-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#960cbf]" />
          <input
            type="text"
            placeholder="Tu número de contacto"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#ca34ff]/30 focus:ring-2 focus:ring-[#ca34ff] outline-none bg-white bg-opacity-70 transition-all duration-300"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <FaCommentDots className="absolute left-3 top-4 text-[#960cbf]" />
          <textarea
            placeholder="Tu mensaje"
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-[#ca34ff]/30 focus:ring-2 focus:ring-[#ca34ff] outline-none bg-white bg-opacity-70 transition-all duration-300 h-32 resize-none"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] text-white-50 font-bold py-3 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
