import { motion } from 'framer-motion'
import { FORMATOS } from '../data/Formatos'

export default function Rendimiento() {
  return (
    <section id="rendimiento" className="py-24">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-dorado">
          Formatos
        </p>
        <h2 className="font-display text-4xl md:text-5xl">
          ¿Cuántas atomizaciones rinden?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FORMATOS.map((formato, i) => (
            <motion.div
              key={formato.ml}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-lg border border-linea bg-carbon p-8"
            >
              <p className="font-display text-5xl text-dorado">
                {formato.ml} ml
              </p>
              <p className="mt-6 font-display text-4xl">
                ≈ {formato.atomizaciones}
              </p>
              <p className="mt-1 text-sm uppercase tracking-widest text-bruma">
                atomizaciones
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-md text-xs text-bruma">
          Valores aproximados: no todos los perfumes tienen la misma
          concentración.
        </p>
      </div>
    </section>
  )
}