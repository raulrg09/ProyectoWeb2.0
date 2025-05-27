import React from 'react'
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const BlogData = [
    {
        title:"Cómo escoger el smartwatch perfecto",
        subtitle:"Este artículo no trata de ser una guía de compra al uso limitado a especificaciones puras y duras, sino que intentaremos reflexionar sobre qué es importante a la hora de comprar un reloj inteligente...",
        published:"10 de enero de 2025",
        image: Img1,
    },
    {
        title:"Los mejores dispositivos calidad-precio",
        subtitle:"Los fabricantes siguen con su gran ritmo de lanzamientos arrancado el año y, aunque la tónica general es de precios mayores respecto al pasado curso, sigue habiendo grandes móviles en relación calidad precio...",
        published:"15 de marzo de 2025",
        image: Img2,
    },
    {
        title:"La revolución del VR",
        subtitle:"La Realidad Virtual (RV) es un entorno de escenas y objetos de apariencia real —generado mediante tecnología informática— que crea en el usuario la sensación de estar inmerso en él...",
        published:"21 de noviembre de 2024",
        image: Img3,
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
                    <div key={data.title} className='bg-white dark:bg-gray-900'>
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