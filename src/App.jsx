import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import HeroCarousel from "./components/HeroCarousel"
import NavBar from './components/NavBar';
import Cycles from './components/Cycles';
import About from './components/About';
import { FooterSocial } from './components/Footer';
import { GetInTouchSimple } from './components/Contact';
import Others from './components/Others';



function App() {

  return (
    <>
    <NavBar/>
    <MantineProvider>
       <HeroCarousel/> 
       <main className='px-4 sm:px-8 mb-8'>
        <Cycles/>
        <About/>
       <GetInTouchSimple/>
       <Others/>
       </main>
      <FooterSocial/>
    </MantineProvider>
    
    </>
  )
}

export default App
