import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Hero from './componentes/Hero/Hero'
import Category from './componentes/Category/Category'
import Category2 from './componentes/Category/Category2'
import Services from './componentes/Services/Services'

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
    </div>
  )
}

export default App