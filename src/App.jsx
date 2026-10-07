import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="font-display text-6xl text-marfil">Huele caro, gasta menos.</h1>
      <button className="bg-dorado hover:bg-dorado-hover text-grafito px-6 py-3 rounded-md font-medium transition-colors">
        Pedir por Instagram
      </button>
    </main>
  )
}