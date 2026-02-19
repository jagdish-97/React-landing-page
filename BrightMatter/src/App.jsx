import react from 'react'
import {Header} from "./sections/Header"
import {Hero} from "./sections/Hero"
import {About} from "./sections/About"
import {Clients} from "./sections/Clients"
import {Offer} from "./sections/Offer"
import { Portfolio } from './sections/Portfolios'
import { Reviews } from './sections/Reviews'
import { Cta } from './sections/Cta'
import { Footer } from './sections/Footer'
const App=() =>{
  return(
 <div>
  <Header />
  <Hero />
  <About />
  <Clients />
  <Offer />
  <Portfolio />
  <Reviews />
  <Cta />
  <Footer />
  </div>
 
  )
}

export default App
