import React from 'react'
import Header from '../../components/Header/Header'
import BarraBuscadora from '../../components/BarraBuscadora/AutoComplete'
import Carrusel from '../../components/Carrusel/Carousel'
import Travels from '../../components/Travels/Travels'
import Social from '../../components/Social/Social'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <BarraBuscadora />
      <Carrusel />
      <Travels />
      <Social />
      <About />
      <Footer />
    </div>
  )
}

export default Home