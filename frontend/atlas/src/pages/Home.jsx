import React from 'react'
import NavBar from '../components/Global/NavBar/NavBar'
import Main from '../components/Home/Main/Main'
import Personas from '../components/Home/Personas/Personas'
import Info from '../components/Home/Info/Info'
import Footer from '../components/Global/Footer/Footer'

const Home = () => {
  return (
      <div className="gradient-bg">
        <NavBar/>
        <Main/>
        <Info/>
        <Personas/>
        <Footer/>
      </div>    
  )
}

export default Home