import React from 'react'
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const BlogData = [
    {
        title:"El RPG más ambicioso de GameCube",
        subtitle:"Homeland fue uno de los videojuegos más ambiciosos y desconocidos de GameCube. Descubre este peculiar RPG online de 36 jugadores simultáneos...",
        published:"10 de enero de 2025",
        image: Img1,
        aosDelay: "0",
    },
    {
        title:"Este juego de Mario en 16-bits jamás vió la luz",
        subtitle:"BS Super Mario Collection: el recopilatorio perdido de Mario para Super Famicom y Satellaview que no salió de Japón y solo estuvo disponible por tiempo limitado...",
        published:"15 de marzo de 2025",
        image: Img2,
        aosDelay: "200",
    },
    {
        title:"Pokemon Oro y Plata cumplen 25 años",
        subtitle:"Pokémon Oro y Pokémon Plata debutaron el 21 de noviembre de 1999 en Japón, por lo que el 21/11/2024 cumplen un cuarto de siglo. Repasamos estos títulos únicos y destacamos por qué son tan queridos y recordados...",
        published:"21 de noviembre de 2024",
        image: Img3,
        aosDelay: "400",
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className="container">
            {/* Sección del header */}
            <Heading title="Noticias recientes" subtitle={"Explorar blogs"}/>
            {/* Sección de blog */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>            
            {/* Card del blog */}
            {
                BlogData.map((data) =>(
                    <div data-aos="fade up"
                         data-aos-delay={data.aosDelay}
                         key={data.title} className='bg-white dark:bg-gray-900'>
                        {/* Sección de imágen */}
                        <div className='overflow-hidden rounded-2xl mb-2'>
                            <img src={data.image} alt="" className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500'/>
                        </div>
                        {/* Sección de contenido */}
                        <div className='space-y-2'>
                            <p className='text-xs text-gray-500'>{data.published}</p>
                            <p className='font-bold line-clamp-1'>{data.title}</p>
                            <p className='text-justify line-clamp-3 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Blogs