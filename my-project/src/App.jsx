import React from 'react'
import Navbar from './componentes/Navbar/Navbar';
import Hero from './componentes/Hero/Hero';
import Category from './componentes/Category/Category';
import Category2 from './componentes/Category/Category2';
import Services from './componentes/Services/Services';
import Banner from './componentes/Banner/Banner';
import consolas from './assets/hero/consolas.png';
import Products from './componentes/Products/Products';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png';
import Blogs from './componentes/Blogs/Blogs';
import videojuegos from './assets/hero/boxes-pack.png';
import Footer from './componentes/Footer/Footer';
import Popup from './componentes/Popup/Popup';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
    discount: "15% DESCUENTO",
    title: "Consolas",
    date: "Del 26 de mayo al 3 de junio",
    image: consolas,
    title2: "Nintendo, Sony y Microsoft",
    title3: "",
    title4: "Descuento válido en compras mínimas de $3,000",
    bgColor: "#f42c37",
};

const BannerData2 = {
    discount: "20% DESCUENTO",
    title: "Juegos",
    date: "Del 26 de mayo al 3 de junio",
    image: videojuegos,
    title2: "Portátiles y Sobremesa",
    title3: "",
    title4: "Descuento válido en compras mínimas de $2,000",
    bgColor: "#2dcc6f",
}

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,        
      }
    );
    AOS.refresh();
  }, [])

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App