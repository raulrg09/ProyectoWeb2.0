import React from 'react'
import Slider from "react-slick";
import Image1 from "../../assets/hero/nintendo-64-hero.png";
import Image2 from "../../assets/hero/playstation-2.png";
import Image3 from "../../assets/hero/xbox-clasico.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "Desde $1,999",
        title: "Consolas",
        title2: "Nintendo 64",        
    },
    {
        id: 2,
        img: Image2,
        subtitle: "Desde $1,499",
        title: "Consolas",
        title2: "PlayStation 2",        
    },
    {
        id: 3,
        img: Image3,
        subtitle: "Desde $2,499",
        title: "Consolas",
        title2: "XBOX Clásico",
    },
];

const Hero = ({handleOrderPopup}) => {

    const settings = {
        dots: true,
        autoplay: true,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        cssEase: "ease-in-out",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

  return (
    <div className="container">
        <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">            
            <div className="container pb-8 sm:pb-0">
                {/* Sección "Hero" */}
                <Slider { ... settings}>                
                    {
                        HeroData.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* Sección de texto */}
                                    <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 data-aos="zoom-out" 
                                            data-aos-duration="500" 
                                            data-aos-once="true" 
                                            className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                                        <h1 data-aos="zoom-out" 
                                            data-aos-duration="500" 
                                            data-aos-once="true"
                                            className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                        <h1 data-aos="zoom-out" 
                                            data-aos-duration="500" 
                                            data-aos-once="true"
                                            className="text-5xl uppercase text-white dark:text-black sm:text-[60px] md:text-[80px] xl:text-[80px] font-bold">{data.title2}</h1>
                                        <div data-aos="fade-up" 
                                            data-aos-offset="0"
                                            data-aos-duration="500" 
                                            data-aos-delay="300">
                                            <Button
                                                text = "Comprar ahora"
                                                bgColor="bg-primario"
                                                textColor="text-white"
                                                handler={handleOrderPopup}/>
                                        </div>
                                    </div>
                                    {/* Sección de imágen */}
                                    <div className="order-1 sm:order-2">
                                        <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                                            <img src={data.img} alt="" 
                                            className="w-[300px] sm:w-[675px] h-[300px] sm:h-[450px] sm:scale-95 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
                                        </div>
                                    </div>
                                </div>                        
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Hero