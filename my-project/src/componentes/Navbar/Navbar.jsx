import React from 'react'
import { IoSearchCircle } from 'react-icons/io5'
import { TiShoppingCart } from "react-icons/ti";
import DarkMode from './DarkMode';
import { IoCaretDownCircle } from "react-icons/io5";
import Logo from "../../assets/website/space-invaders.png"

const MenuLinks = [
    {
        id: 1,
        name: "Inicio",
        link: "/#",
    },
    {
        id: 2,
        name: "Tienda",
        link: "/#tienda",
    },
    {
        id: 3,
        name: "Sobre nosotros",
        link: "/#sobre-nosotros",
    },
    {
        id: 4,
        name: "Blogs",
        link: "/#blogs",
    },
]

const DropdownLinks = [
    {
        id: 1,
        name: "Consolas",
        link: "/#",
    },
    {
        id: 2,
        name: "Videojuegos",
        link: "/#",
    },
    {
        id: 3,
        name: "Controles",
        link: "/#",
    },
]

const Navbar = ({handleOrderPopup}) => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className="py-4">
            <div className="container flex justify-between items-center">
                {/* Sección de logo y enlaces */}
                <div className="flex items-center gap-4">
                    <a href="#"
                    className="text-primario font-semibold tracking-widest text-2xl
                               sm:text-3xl"
                    >RetroGaming</a>
                    <img src={Logo} alt="" className='w-[30px] h-[30px]'/>
                    {/* Items del menú */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center gap-4">
                            {
                                MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link}
                                            className="inline-block font-semibold px-4 text-gray-500
                                            hover:text-black dark:hover:text-white duration-200"
                                        > {" "}{data.name}</a>
                                    </li>
                                ))
                            }
                            {/* Menú desplegable */}
                            <li className="relative cursor-pointer group">
                                <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">
                                    Enlaces
                                    <span>
                                    <IoCaretDownCircle className="group-hover:rotate-180 duration-300"/>
                                    </span>
                                </a>  
                                {/* Enlaces del menú desplegable */}
                                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                    <ul className="space-y-2">
                                        {
                                            DropdownLinks.map((data, index) => (
                                                <li>
                                                    <a className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primario/20 rounded-md font-semibold"
                                                    href={data.link}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Sección derecha del Navbar*/}
                <div className="flex justify-between items-center gap-4">
                    {/* Barra de búsqueda */}
                    <div className="relative group hidden sm:block">
                        <input type="text" 
                               placeholder="Buscar"
                               className="search-bar"/>
                               <IoSearchCircle className="text-xl text-gray-600 group-hover:text-primario dark:text-gray-400 
                               absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                               />
                    </div>
                    {/* Icono de carrito */}
                    <button className="relative p-3" onClick={handleOrderPopup}>
                        <TiShoppingCart className="text-xl text-gray-600 dark:text-gray-400"/>
                        <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                            4
                        </div>
                    </button>
                    {/* Botón de modo oscuro */}
                    <div>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar