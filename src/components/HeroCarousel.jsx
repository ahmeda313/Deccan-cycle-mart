import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import {  useState } from 'react';


const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://images.unsplash.com/photo-1726942371143-3afca583a72f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]


export default function HeroCarousel({height}) {
    let val
    if(window.innerWidth>723){
        val = 400
    }else{
        val = 200
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
        setCarouselHeight(200)
    }
  })
  
  return (
    <Carousel  height={carouselHeight} loop>
      {slides}
    </Carousel>
  );
}