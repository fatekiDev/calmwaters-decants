import { useState } from 'react'
import logo from '../assets/logo.png'
import { SITE } from '../data/site'

const LINKS = [
  { label: 'Decants', href: '#que-es' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Reseñas', href: '#resenas' },
]

export default function Navbar() {
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-grafito/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 md:h-28">
        {/* Logo */}
        <a href="#inicio" aria-label="Ir al inicio">
          <img src={logo} alt={SITE.nombre} className="h-21 w-auto md:w-auto" />
        </a>

        {/* Links (solo desktop) */}
        <ul className="hidden items-center gap-8 text-sm uppercase tracking-widest text-bruma md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-dorado">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Botón Instagram (solo desktop) */}
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-dorado px-4 py-2 text-sm text-dorado transition-colors hover:bg-dorado hover:text-grafito md:inline-block"
          >
            Instagram
          </a>

          {/* Botón hamburguesa (solo móvil) */}
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            aria-label="Abrir menú"
            aria-expanded={abierto}
            className="text-2xl text-marfil md:hidden"
          >
            {abierto ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Menú desplegable (solo móvil) */}
      {abierto && (
        <ul className="flex flex-col gap-5 border-t border-linea bg-grafito px-5 py-6 text-sm uppercase tracking-widest md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setAbierto(false)}
                className="text-marfil"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dorado"
            >
              Instagram
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}