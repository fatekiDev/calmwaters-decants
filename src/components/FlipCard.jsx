import { useState } from 'react'
import { motion } from 'framer-motion'

// Estilo compartido por las dos caras: se ocultan cuando miran hacia atrás
const cara = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

export default function FlipCard({
  imagen,
  nombre,
  formatos = ['3 ml', '5 ml', '10 ml'],
}) {
  const [volteada, setVolteada] = useState(false)
  const [inclinacion, setInclinacion] = useState({ x: 0, y: 0 })

  return (
    <button
      type="button"
      onClick={() => setVolteada(!volteada)}
      onPointerMove={(event) => {
        if (event.pointerType !== 'mouse') return

        const limites = event.currentTarget.getBoundingClientRect()
        const posicionX = (event.clientX - limites.left) / limites.width
        const posicionY = (event.clientY - limites.top) / limites.height

        setInclinacion({
          x: (0.5 - posicionY) * 18,
          y: (posicionX - 0.5) * 18,
        })
      }}
      onPointerLeave={() => setInclinacion({ x: 0, y: 0 })}
      aria-pressed={volteada}
      aria-label={`Girar tarjeta de ${nombre}`}
      className="h-96 w-72 cursor-pointer"
      style={{
        perspective: 1000,
        transform: `perspective(1000px) rotateX(${inclinacion.x}deg) rotateY(${inclinacion.y}deg)`,
        transformStyle: 'preserve-3d',
        transition: 'transform 180ms ease-out',
        willChange: 'transform',
      }}
    >
      <motion.div
        animate={{ rotateY: volteada ? 180 : 0 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative h-full w-full"
      >
        {/* Cara frontal: el frasco */}
        <div
          style={cara}
          className="absolute inset-0 overflow-hidden rounded-xl border border-linea bg-carbon"
        >
          <img
            src={imagen}
            alt={nombre}
            className="h-full w-full -translate-y-23 object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-grafito to-transparent p-5 text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-dorado">
              Frasco original
            </p>
            <p className="mt-1 font-display text-2xl">{nombre}</p>
            <p className="mt-2 text-xs text-bruma">Haz click para voltear</p>
          </div>
        </div>

        {/* Cara trasera: el decant */}
        <div
          style={{ ...cara, transform: 'rotateY(180deg)' }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-xl border border-dorado/40 bg-carbon p-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-dorado">
            Tu decant
          </p>
          <p className="font-display text-3xl">La misma fragancia, en el tamaño quez prefieras.</p>

          <ul className="flex gap-3">
            {formatos.map((formato) => (
              <li
                key={formato}
                className="rounded-full border border-dorado px-4 py-1.5 text-sm text-dorado"
              >
                {formato}
              </li>
            ))}
          </ul>

          <p className="text-xs text-bruma">Toca para volver</p>
        </div>
      </motion.div>
    </button>
  )
}