import { formatearPrecio } from '../utils/Formato'

export default function ProductCard({ perfume, onSeleccionar }) {
  // Precio más bajo entre todos los formatos
  const precioDesde = Math.min(...Object.values(perfume.precios))

  return (
    <button
      type="button"
      onClick={() => onSeleccionar(perfume)}
      className="group text-left"
    >
      <div className="aspect-[4/5] overflow-hidden rounded-lg border border-linea bg-carbon">
        <img
          src={perfume.imagen}
          alt={perfume.nombre}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-bruma">
          {perfume.marca}
        </p>
        <h3 className="mt-1 font-display text-xl">{perfume.nombre}</h3>
        <p className="mt-1 text-sm text-dorado">
          Desde {formatearPrecio(precioDesde)}
        </p>
      </div>
    </button>
  )
}