import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../data/site'
import { FORMATOS } from '../data/Formatos'
import { formatearPrecio } from '../utils/FormatearPrecio'
import AcordesBarras from './AcordesBarras'

export default function ProductModal({ perfume, onCerrar }) {
  const formatos = Object.keys(perfume.precios)
  const [formato, setFormato] = useState(formatos[0])

  const mensaje = `Hola! Quiero pedir el decant de ${perfume.nombre} (${formato}).`
  const atomizaciones = FORMATOS.find(
    (f) => `${f.ml} ml` === formato
  )?.atomizaciones

  // Cierra con Esc y bloquea el scroll de la página mientras está abierto
  useEffect(() => {
    const alPresionar = (e) => {
      if (e.key === 'Escape') onCerrar()
    }
    document.addEventListener('keydown', alPresionar)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', alPresionar)
      document.body.style.overflow = ''
    }
  }, [onCerrar])

  const notas = perfume.notas
  ? [
      ['Salida', perfume.notas.salida],
      ['Corazón', perfume.notas.corazon],
      ['Fondo', perfume.notas.fondo],
    ]
  : []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onCerrar}
      className="fixed inset-0 z-60 flex items-center justify-center bg-grafito/80 p-4 pb-20 backdrop-blur-sm md:pb-4"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-full w-full max-w-4xl overflow-y-auto rounded-xl border border-linea bg-carbon md:grid-cols-2"
      >
        {/* Botón X */}
        <button
          type="button"
          onClick={onCerrar}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-grafito/70 text-marfil transition-colors hover:text-dorado"
        >
          ✕
        </button>

        {/* Imagen */}
        <img
          src={perfume.imagen}
          alt={perfume.nombre}
          className="aspect-4/5 w-full object-contain p-8 md:aspect-auto md:h-full md:p-12"
        />

        {/* Contenido */}
        <div className="flex flex-col p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-dorado">
            {perfume.marca} · {perfume.familia}
          </p>
          <h3 id="modal-titulo" className="mt-2 font-display text-3xl md:text-4xl">
            {perfume.nombre}
          </h3>
          <p className="mt-4 text-sm text-bruma">{perfume.descripcion}</p>

          
                    {/* Acordes principales */}
          {perfume.acordes && (
            <>
              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-bruma">
                Acordes principales
              </p>
              <AcordesBarras acordes={perfume.acordes} />
            </>
          )}

          {/* Notas (opcional) */}
          {notas.length > 0 && (
            <dl className="mt-6 space-y-2">
              {notas.map(([titulo, lista]) => (
                <div key={titulo} className="flex gap-3 text-sm">
                  <dt className="w-20 shrink-0 text-bruma">{titulo}</dt>
                  <dd>{lista.join(', ')}</dd>
                </div>
              ))}
            </dl>
          )}

          {/* Formatos */}
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-bruma">
            Elige el formato
          </p>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {formatos.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFormato(f)}
                aria-pressed={formato === f}
                className={
                  'rounded-md border px-3 py-3 text-center transition-colors ' +
                  (formato === f
                    ? 'border-dorado bg-dorado/10 text-dorado'
                    : 'border-linea text-bruma hover:border-dorado')
                }
              >
                <span className="block text-sm">{f}</span>
                <span className="block font-medium">
                  {formatearPrecio(perfume.precios[f])}
                </span>
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-bruma">
            ≈ {atomizaciones} atomizaciones (aproximado)
          </p>

          {/* Acciones */}
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => navigator.clipboard?.writeText(mensaje)}
            className="mt-8 block rounded-md bg-dorado py-3 text-center font-medium text-grafito transition-colors hover:bg-dorado-hover"
          >
            Pedir por Instagram
          </a>
          <p className="mt-2 text-center text-xs text-bruma">
            Copiaremos tu mensaje para que lo pegues en el chat.
          </p>

          <button
            type="button"
            onClick={onCerrar}
            className="mt-4 py-2 text-sm text-bruma transition-colors hover:text-marfil"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}