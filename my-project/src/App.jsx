import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Category from './componentes/Category/Category'
import Category2 from './componentes/Category/Category2'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
    </div>
  )
}

export default App