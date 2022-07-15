import { useState } from 'react'
import BarraBusqueda from './components/BarraBuscadora/AutoComplete'
import Carrusel from './components/Carrusel/Carousel'
import Footer from './components/Footer/Footer'
// import './App.css'

function App() {
  return (
    <div className="App">
      <BarraBusqueda />
      <Carrusel />
      <Footer />
    </div>
  )
}

export default App
