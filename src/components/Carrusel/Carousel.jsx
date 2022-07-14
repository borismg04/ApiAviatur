import { useState,useEffect } from "react"
import axios from "axios"

const Carousel = () => {

  const [images, setImages] = useState([])
  const [currentImage, setCurrentImage] = useState(0)

  const consultCarouselApi = async () => {
    const res = await axios.get("https://agenciasenlinea.aviatur.com/aviatur/content.json")
    setImages(res.data)
    console.log('res.data:', res.data)

  }

  useEffect(() => {
    consultCarouselApi()
  },[])

  return (
    <div>Carrusel</div>
  )
}

export default Carousel