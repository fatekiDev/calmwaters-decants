import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueEsDecant from './components/QueEsDecant'
import ComoPedir from './components/ComoPedir'
import Catalogo from './components/Catalogo'
import Rendimiento from './components/Rendimiento'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEsDecant />
        <Rendimiento />
        <ComoPedir />
        <Catalogo />
      </main>
    </>
  )
}