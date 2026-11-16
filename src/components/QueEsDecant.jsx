import { motion } from 'framer-motion'
import FlipCard from './FlipCard'
import frasco from '../assets/perfumes/scandal-pour-homme.webp'

const BENEFICIOS = [
  '100% originales',
  'Mejor precio que el frasco completo',
  'Prueba varios sin riesgo',
]

export default function QueEsDecant() {
  return (
    <section id="que-es" className="pt-8 pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-2">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-dorado">
            Conoce el formato
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            ¿Qué es un decant?
          </h2>
          <p className="mt-6 max-w-md text-bruma">
            Un decant es una porción pequeña de un perfume original, ideal para
            probarlo antes de invertir en el frasco completo.
          </p>

          <ul className="mt-8 space-y-3">
            {BENEFICIOS.map((beneficio) => (
              <li key={beneficio} className="flex items-center gap-3">
                <span className="text-dorado">✓</span>
                {beneficio}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Flipcard */}
        <div className="flex justify-center">
          <FlipCard imagen={frasco} nombre="Scandal Pour Homme" />
        </div>
      </div>
    </section>
  )
}