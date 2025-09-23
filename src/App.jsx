
import { useState,useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Hero from './components/Hero/Hero'
import Process from './components/Process/Process.jsx'
import Price from './components/Pricing/Price.jsx'
import Work from './components/Work/Work.jsx'
import Contact from './components/Contact/Contact.jsx'
import Review from './components/Review/Review.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
const [light, setLight] = useState(false);

  // const toggleTheme = () => {
  //   document.body.classList.toggle("light");
  //   setDark(!light);
  // };
  useEffect(() => {
    if (light) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [light]);
  

  return (
    <>
      <div className="container">
        <Navbar light={light} setLight={setLight}/>
        <Hero />
        <Services />
        <Work />
        <Process/>       
        <Price />
        <Review />
        <Contact />
        <Footer />

      </div>

    </>
  )
}

export default App
