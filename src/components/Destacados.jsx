import { PERFUMES } from '../data/Perfumes'
import ProductCard from './ProductCard'

// Solo los perfumes marcados con destacado: true
const DESTACADOS = PERFUMES.filter((p) => p.destacado)

export default function Destacados({ onSeleccionar }) {
  if (DESTACADOS.length === 0) return null

  return (
    <section
      id="destacados"
      className="border-y border-linea bg-carbon/40 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl md:text-5xl">
          Destacados
        </h2>
        <p className="mt-4 text-center text-bruma">
          Los que más piden nuestros clientes
        </p>

        <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3">
          {DESTACADOS.map((perfume) => (
            <ProductCard
              key={perfume.id}
              perfume={perfume}
              onSeleccionar={onSeleccionar}
            />
          ))}
        </div>
      </div>
    </section>
  )
}