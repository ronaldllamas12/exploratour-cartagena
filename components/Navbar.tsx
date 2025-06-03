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
    <nav className="bg-white/10 backdrop-blur-sm shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Compass size={24} />
          ExploraTours
        </Link>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className="md:hidden hover:text-[#e0b3ff] transition"
        >
          {menuAbierto ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú escritorio */}
        <div className="hidden md:flex gap-4 font-semibold">
          {[
            { href: '/', label: 'Inicio' },
            { href: '/quienes-somos', label: '¿Quiénes somos?' },
            { href: '/servicios', label: 'Servicios' },
            { href: '/faq', label: 'FAQ' },
            { href: '/contacto', label: 'Contacto' },
            { href: '/exploratourlanding', label: 'Landing' },
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <button className="hover:text-[#e0b3ff] transition px-3 py-1 rounded-md">
                {label}
              </button>
            </Link>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div className="md:hidden flex flex-col items-center gap-3 pb-4 font-semibold bg-white/20 backdrop-blur-md text-[#ffffff] shadow-lg">
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
                className="hover:text-[#e0b3ff] transition px-4 py-2 rounded-md"
              >
                {label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
