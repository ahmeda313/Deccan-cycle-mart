import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import HeroCarousel from "./components/HeroCarousel"
import NavBar from './components/NavBar';
import Cycles from './components/Cycles';
import About from './components/About';
import { FooterSocial } from './components/Footer';
import { GetInTouchSimple } from './components/Contact';


function App() {

  return (
    <>
    <NavBar/>
    <MantineProvider>
       <main className='ms-2 me-2 mb-8'>
       <HeroCarousel/> 
        <About/>
        <Cycles/>
       </main>
       <GetInTouchSimple/>
      <FooterSocial/>
    </MantineProvider>
    
    </>
  )
}

export default App
