import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QueEsDecant from './components/QueEsDecant'
import ComoPedir from './components/ComoPedir'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <QueEsDecant />
        <ComoPedir />
      </main>
    </>
  )
}