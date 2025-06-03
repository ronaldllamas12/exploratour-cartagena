'use client'

import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

interface Props {
  mensajeInicial?: string
}

export default function FormularioWhatsApp({ mensajeInicial = '' }: Props) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [numero, setNumero] = useState('')

  // Si se recibe mensajeInicial, se prellena el mensaje
  useEffect(() => {
    if (mensajeInicial) {
      setMensaje(`Hola, estoy interesado en el servicio de: ${mensajeInicial}`)
    }
  }, [mensajeInicial])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mensajeWhatsApp = `Hola, soy ${nombre}.\nMi correo es: ${email}.\nMensaje: ${mensaje}\nNúmero de contacto: ${numero}`
    const numeroDestino = '+573022265668' // ✅ Reemplaza con tu número real

    // Enviar por WhatsApp
    window.open(`https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank')

    // Enviar por EmailJS
    emailjs.send(
      'service_ppalzk5',      // ✅ Reemplaza con tu ID de servicio
      'template_ct22rmg',     // ✅ Reemplaza con tu ID de plantilla
      {
        nombre,
        email,
        mensaje,
        numero,
      },
      'VoEFlVA5w6IEFD9vj'     // ✅ Reemplaza con tu public key
    ).then(
      () => alert('¡Mensaje enviado por correo y WhatsApp!'),
      (error) => alert('Error al enviar correo: ' + error.text)
    )

    // Limpiar formulario
    setNombre('')
    setEmail('')
    setMensaje('')
    setNumero('')
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#f3ceff] shadow rounded-xl mt-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#f3ceff]">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full p-3 border rounded color-[#ca34ff] focus:border-[#ca34ff] focus:ring-2 focus:ring-[#ca34ff] transition duration-300"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu correo"
          className="w-full p-3 border rounded color-[#ca34ff] focus:border-[#ca34ff] focus:ring-2 focus:ring-[#ca34ff] transition duration-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tu número de contacto"
          className="w-full p-3 border rounded color-[#ca34ff] focus:border-[#ca34ff] focus:ring-2 focus:ring-[#ca34ff] transition duration-300"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu mensaje"
          className="w-full p-3 border rounded h-32 color-[#ca34ff] focus:border-[#ca34ff] focus:ring-2 focus:ring-[#ca34ff] transition duration-300"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full text-[#ffffff] bg-gradient-to-r from-[#ca34ff] via-[#960cbf] to-[#790c97] py-3 rounded hover:brightness-110 transition duration-400 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}
