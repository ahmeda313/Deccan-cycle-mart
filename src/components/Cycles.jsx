import { Carousel } from '@mantine/carousel';
import { GridAsymmetrical } from './Grid';


const url = "https://plus.unsplash.com/premium_photo-1684820879021-c51e33511861?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"



const slides = [1,2,3,4,5,6,7].map((i) => (
    <Carousel.Slide key={url+i}>
      <img src={url} />
    </Carousel.Slide>
  ));

export default function Cycles(){
    return(
        <>
        <div id='services'>
            <h1 className='p-4 text-4xl sm:text-6xl font-bold'>
                Our services
            </h1>
        </div>
        {/* <Carousel
        withIndicators
        height={200}
        slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
        slideGap={{ base: 0, sm: 'md' }}
        loop
        align="start"
      >
            {slides}
      </Carousel> */}
      <GridAsymmetrical/>
      </>
    )
}