import { motion } from 'framer-motion'
import { RESENAS } from '../data/resenas'

export default function Resenas() {
  if (RESENAS.length === 0) return null

  return (
    <section id="resenas" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl md:text-5xl">
          Lo que dicen nuestros clientes
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {RESENAS.map((resena, i) => (
            <motion.figure
              key={resena.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-lg border border-linea bg-carbon p-8"
            >
              <p
                className="text-dorado"
                aria-label={`${resena.estrellas} de 5 estrellas`}
              >
                {'★'.repeat(resena.estrellas)}
                {'☆'.repeat(5 - resena.estrellas)}
              </p>
              <blockquote className="mt-4 text-sm text-marfil">
                “{resena.texto}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-bruma">
                — {resena.autor}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}