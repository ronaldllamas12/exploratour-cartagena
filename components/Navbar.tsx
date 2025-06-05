'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Compass } from 'lucide-react'

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto)
  }

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-seance-900/30 via-seance-400/20 to-blue-900/30 backdrop-blur-sm shadow-xl border-b border-seance-700">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-extrabold text-white-50 drop-shadow-lg hover:drop-shadow-[0_0_10px_rgba(224,179,255,0.8)] transition">
          <Compass size={28} />
          ExploraTours
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className={`md:hidden text-white-50 transition-transform duration-300 ${menuAbierto ? 'rotate-90' : 'rotate-0'} hover:text-pink-400`}
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú escritorio */}
        <div className="hidden md:flex gap-8 font-semibold text-white-50">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/quienes-somos', label: '¿Quiénes somos?' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contacto', label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <button className="relative px-4 py-2  before:absolute before:-bottom-1 before:left-1/2 before:w-0 before:h-1 before:bg-pink-400 before:rounded-full before:transition-all before:duration-300 before:ease-in-out hover:before:w-1/2 hover:before:-translate-x-1/2 hover:text-pink-400">
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden bg-transparent shadow-lg flex flex-col items-center gap-4 py-6 font-semibold text-white-50 animate-fadeIn ">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/quienes-somos', label: '¿Quiénes somos?' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contacto', label: 'Contacto' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <button
                onClick={cerrarMenu}
                className="w-full max-w-xs text-center bg-transparent px-5 py-3 rounded-lg  hover: shadow-md transition "
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      )}

      {/* Animación fadeIn para menú móvil */}
      <style jsx>{`
        @keyframes fadeIn {
          from {opacity: 0; transform: translateY(-10px);}
          to {opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </nav>
  )
}
