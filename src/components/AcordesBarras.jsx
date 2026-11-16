import { motion } from 'framer-motion'

// Colores apagados por acorde (en minúsculas y sin tildes)
const COLORES = {
  ambar: '#C8782A',
  amaderado: '#8A5A3A',
  'fresco especiado': '#9BB848',
  'calido especiado': '#B8472A',
  tabaco: '#7A4F2E',
  dulce: '#D4606B',
  avainillado: '#E3C291',
  atalcado: '#CDBBA9',
  pachuli: '#6F7A3A',
  iris: '#7A5A8C',
  citrico: '#CFC24A',
  afrutado: '#D9694A',
  aromatico: '#6FB5A0',
  verde: '#4E9A5E',
  floral: '#D98FB0',
  cuero: '#5E4636',
  almizclado: '#B8A9C9',
  acuatico: '#4F8FB5',
  terroso: '#8B6B4A',
}

// "Pachulí" -> "pachuli" para buscarlo en el mapa
const clave = (texto) =>
  texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const colorDe = (nombre) => COLORES[clave(nombre)] ?? '#C9A24A'

export default function AcordesBarras({ acordes }) {
  // Ordenados de mayor a menor, sin importar cómo vengan en los datos
  const ordenados = [...acordes].sort((a, b) => b.nivel - a.nivel)

  return (
    <ul className="mt-3 space-y-2">
      {ordenados.map((acorde, i) => (
        <li key={acorde.nombre} className="flex items-center gap-3">
          <span className="w-28 shrink-0 text-xs text-bruma">
            {acorde.nombre}
          </span>
          <div
            className="h-2.5 flex-1 overflow-hidden rounded-full bg-grafito"
            aria-hidden="true"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${acorde.nivel}%` }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.07,
                ease: 'easeOut',
              }}
              className="h-full rounded-full"
              style={{ backgroundColor: acorde.color ?? colorDe(acorde.nombre) }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}