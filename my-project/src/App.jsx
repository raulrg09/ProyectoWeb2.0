import React from 'react'
import Navbar from './componentes/Navbar/Navbar';
import Hero from './componentes/Hero/Hero';
import Category from './componentes/Category/Category';
import Category2 from './componentes/Category/Category2';
import Services from './componentes/Services/Services';
import Banner from './componentes/Banner/Banner';
import headphone from './assets/hero/headphone.png';
import Products from './componentes/Products/Products';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './componentes/Blogs/Blogs';
import Footer from './componentes/Footer/Footer';

const BannerData = {
    discount: "30% DESCUENTO",
    title: "Audífonos",
    date: "10 al 28 de Enero",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Venta de invierno",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reciendis",
    bgColor: "#f42c37",
};

const BannerData2 = {
    discount: "40% DESCUENTO",
    title: "Smartwatch",
    date: "14 al 18 de enero",
    image: smartwatch2,
    title2: "Smart Solo",
    title3: "Venta de invierno",
    title4: "LLorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reciendis",
    bgColor: "#2dcc6f",
}

const App = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App