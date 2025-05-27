import React from 'react'
import { FaFacebook, FaInstagram, FaLocationArrow, FaMobileAlt, FaWhatsapp } from 'react-icons/fa'

const FooterLinks = [
    {
        title: "Inicio",
        link: "/#",
    },
    {
        title: "Acerca de",
        link: "/#",
    },
    {
        title: "Contacto",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className="container">
            <div className="grid md:grid-cols-3 pb-20 pt-5">
                {/* Datos de la organización */}
                <div className='py-8 px-4'>
                    <a href="#" className="text-primario font-semibold tracking-widest text-2xl uppercase
                               sm:text-3xl">Tienda</a>
                    <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
                        lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum
                    </p>
                    <p className='text-gray-500 mt-4'>
                        🎮💻🎧🔊
                    </p>
                    <a href="#" target="_blank" className='inline-block bg-primario/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Inicio</a>
                </div>
                {/* Links del footer */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    {/* Enlaces para navegar */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Navegar</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) =>(
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white 
                                                                        hover:text-gray-400 duration-300'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                    {/* Enlaces para navegar (3ra columna) */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Enlaces</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data,index) =>(
                                    <li key={index}>
                                        <a href={data.link} className='text-gray-600 dark:text-gray-400 hover:dark:text-white 
                                                                        hover:text-gray-400 duration-300'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* Domicilio de la organización */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-bold sm:text-left mb-3'>Ubicación</h1>
                        <div>
                            <div className="flex items-center gap-3">
                                <FaLocationArrow/>
                                <p>Cto. Exterior, C.U., 04510, Coyoacán, CDMX</p>
                            </div>
                            <div className="flex items-center gap-3 mt-6">
                                <FaMobileAlt/>
                                <p>+52 55 5622 8288</p>
                            </div>                                                        
                            {/* Redes sociales */}
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl hover:text-primario duration-300'/>
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl hover:text-primario duration-300'/>
                                </a>
                                <a href="#">
                                    <FaWhatsapp className='text-3xl hover:text-primario duration-300'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default Footer