import { motion } from 'framer-motion'
import { SITE } from '../data/site'

const PASOS = [
  {
    numero: '01',
    titulo: 'Elige tu perfume',
    texto: 'Explora el catálogo y escoge la fragancia y el formato que más te guste.',
  },
  {
    numero: '02',
    titulo: 'Escríbenos por Instagram',
    texto: 'Envíanos un mensaje con tu elección y te confirmamos disponibilidad y precio.',
  },
  {
    numero: '03',
    titulo: 'Recibe tu pedido',
    texto: 'Coordinamos contigo el pago y la entrega para que lo tengas en tus manos.',
  },
]

export default function ComoPedir() {
  return (
    <section id="como-pedir" className="border-y border-linea bg-carbon/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="text-center font-display text-4xl md:text-5xl">
          ¿Cómo pedir?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PASOS.map((paso, i) => (
            <motion.div
              key={paso.numero}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-lg border border-linea bg-carbon p-8"
            >
              <span className="font-display text-5xl text-dorado/60">
                {paso.numero}
              </span>
              <h3 className="mt-4 font-display text-2xl">{paso.titulo}</h3>
              <p className="mt-3 text-sm text-bruma">{paso.texto}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-dorado px-6 py-3 font-medium text-grafito transition-colors hover:bg-dorado-hover"
          >
            Escríbenos por Instagram
          </a>
        </div>
      </div>
    </section>
  )
}