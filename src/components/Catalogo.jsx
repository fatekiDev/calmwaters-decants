import { useState } from 'react'
import { PERFUMES } from '../data/Perfumes'
import ProductCard from './ProductCard'

// Los filtros se generan solos a partir de los datos
const FAMILIAS = ['Todos', ...new Set(PERFUMES.map((p) => p.familia))]
const POR_PAGINA = 8

export default function Catalogo({ onSeleccionar }) {
  const [familia, setFamilia] = useState('Todos')
  const [visibles, setVisibles] = useState(POR_PAGINA)
  const [seleccionado, setSeleccionado] = useState(null)

  const filtrados =
    familia === 'Todos'
      ? PERFUMES
      : PERFUMES.filter((p) => p.familia === familia)

  const cambiarFamilia = (nueva) => {
    setFamilia(nueva)
    setVisibles(POR_PAGINA) // al filtrar, vuelve a mostrar los primeros
  }

  return (
    <section id="catalogo" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl md:text-5xl">
          Catálogo
        </h2>

        {/* Filtros */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FAMILIAS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => cambiarFamilia(f)}
              aria-pressed={familia === f}
              className={
                'rounded-full border px-5 py-2 text-sm transition-colors ' +
                (familia === f
                  ? 'border-dorado bg-dorado text-grafito'
                  : 'border-linea text-bruma hover:border-dorado hover:text-dorado')
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid de perfumes */}
        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filtrados.slice(0, visibles).map((perfume) => (
            <ProductCard
              key={perfume.id}
              perfume={perfume}
              onSeleccionar={onSeleccionar}
            />
          ))}
        </div>

        {/* Ver más */}
        {filtrados.length > visibles && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibles(visibles + POR_PAGINA)}
              className="rounded-md border border-dorado px-6 py-3 text-dorado transition-colors hover:bg-dorado hover:text-grafito"
            >
              Ver más perfumes
            </button>
          </div>
        )}
      </div>

      
    </section>
  )
}