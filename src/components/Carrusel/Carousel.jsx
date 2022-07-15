import { useState,useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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

  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll:3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
    

  return (
    
    <div>
      <Slider {...settings}>
        {/* {images.map((item)=>(
          <div className="card">
            <div className="card-top">
              <img src={item.image} alt={item.city}/>
              <h3>{item.city}</h3>
            </div>
            <div className="card-bottom">
              <h2>$ {item.price}</h2>
          </div>
        </div>
        ))} */}
        {images && images.map((pictures, index) => {
          return (
            <div key={index}>
              <img src={pictures.image} alt=""/>
              <h3>{pictures.city}</h3>
              <h4>$ {pictures.price}</h4>
            </div>
          )}
        )}
      </Slider>
    </div>
  )
}

export default Carousel