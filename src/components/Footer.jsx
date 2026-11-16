import logo from '../assets/logo.png'
import { SITE } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-linea pb-24 pt-12 md:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 md:flex-row md:justify-between">
        <img src={logo} alt={SITE.nombre} className="h-14 w-auto" />

        <ul className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-widest text-bruma">
          <li>
            <a href="#catalogo" className="transition-colors hover:text-dorado">
              Catálogo
            </a>
          </li>
          <li>
            <a href="#resenas" className="transition-colors hover:text-dorado">
              Reseñas
            </a>
          </li>
          <li>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-dorado"
            >
              Instagram
            </a>
          </li>
        </ul>

        <p className="text-xs text-bruma">
          © {new Date().getFullYear()} {SITE.nombre}
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-linea/60 px-5 pt-6 text-center text-xs text-bruma md:text-right">
        Sitio creado por{' '}
        <a
          href={SITE.autor.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-marfil/80 transition-colors hover:text-dorado"
        >
          {SITE.autor.nombre}
        </a>
        {' · '}
        <a
          href={`mailto:${SITE.autor.correo}`}
          className="transition-colors hover:text-dorado"
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}