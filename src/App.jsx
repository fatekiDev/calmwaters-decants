import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueEsDecant from './components/QueEsDecant'
import Rendimiento from './components/Rendimiento'
import ComoPedir from './components/ComoPedir'
import Catalogo from './components/Catalogo'
import Destacados from './components/Destacados'
import Resenas from './components/Resenas'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'
import BotonInstagram from './components/BotonInstagram'
import ProductModal from './components/ProductModal'

export default function App() {
  const [seleccionado, setSeleccionado] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEsDecant />
        <Rendimiento />
        <ComoPedir />
        <Catalogo onSeleccionar={setSeleccionado} />
        <Destacados onSeleccionar={setSeleccionado} />
        <Resenas />
        <CtaFinal />
      </main>
      <Footer />
      <BotonInstagram />

      <AnimatePresence>
        {seleccionado && (
          <ProductModal
            key={seleccionado.id}
            perfume={seleccionado}
            onCerrar={() => setSeleccionado(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}