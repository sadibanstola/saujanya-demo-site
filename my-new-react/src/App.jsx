import Home from './Home/Home'
import React from 'react'
import Card from './card/Card'
import About from './About/About'
import Certificate from './certificate/Certificate'
import Faq from './faq/Faq'
import Testimonials from './Testimonials/Testimonials'
import Stats from './stats/Stats'
import Footer from './footer/Footer'
const App = () => {
  return (
    <div>
      <Home/>
      <Card/>
      <About/>
      <Testimonials/>
      <Certificate/>
      <Faq/>
      <Stats/>
      <Footer/>
    </div>
  )
}

export default App


