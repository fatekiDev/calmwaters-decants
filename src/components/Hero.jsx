import { motion } from 'framer-motion'
import HeroImg from '../assets/scandal-pour-homme.webp'

const contenedor = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="inicio" className="flex min-h-screen items-center pb-16 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        {/* Texto */}
        <motion.div variants={contenedor} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-4 text-xs uppercase tracking-[0.3em] text-dorado"
          >
            Decants originales
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl leading-tight md:text-7xl"
          >
            Huele caro,
            <br />
            <span className="text-dorado">gasta menos.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-md text-bruma">
            Fragancias premium en formatos pequeños. Prueba antes de invertir
            en el frasco completo.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="rounded-md bg-dorado px-6 py-3 font-medium text-grafito transition-colors hover:bg-dorado-hover"
            >
              Ver catálogo
            </a>
            <a
              href="https://www.instagram.com/calmwaters_decants/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-dorado px-6 py-3 text-dorado transition-colors hover:bg-dorado hover:text-grafito"
            >
              Pedir por Instagram
            </a>
          </motion.div>
        </motion.div>

                {/* Imagen */}
        <motion.img
          src={HeroImg}
          alt="Frasco de Scandal Pour Homme"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto aspect-[4/5] w-full max-w-md rounded-lg border border-linea object-cover"
        />
      
      </div>
    </section>
  )
}