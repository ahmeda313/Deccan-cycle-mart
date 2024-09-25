import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import {  useState } from 'react';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"


const images = [
  banner2,
  banner1,
]


export default function HeroCarousel({height}) {
    let val
    if(window.innerWidth>723){
        val = 400
    }else{
        val = 100
    }

    const [carouselHeight, setCarouselHeight] = useState(val)
    const slides = images.map((url) => (
        <Carousel.Slide key={url}>
      <img src={url} />
    </Carousel.Slide>
  ));

  window.addEventListener("resize",()=>{
    if(window.innerWidth>723){
        setCarouselHeight(400)
    }else{
        setCarouselHeight(100)
    }
  })

  const autoplay = useRef(Autoplay({ delay: 2000 }));
  
  return (
    <Carousel  height={carouselHeight} loop plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop} onMouseLeave={autoplay.current.reset}>
      {slides}
    </Carousel>
  );
}