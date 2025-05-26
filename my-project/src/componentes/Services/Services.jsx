import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,    
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primario'/>,
        title: "Envíos rápidos",
        description: "Envíos rápidos en todos los pedidos"
    },
    {
        id:2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primario'/>,
        title:"Reembolsos",
        description: "Todos los productos pueden ser reembolsados"    
    },
    {
        id: 3,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primario'/>,
        title:"La mejor calidad",
        description: "Todos nuestros productos son de la mejor calidad"
    },
    {
        id:4,
        icon: <FaWallet className='text-4xl md:text-5xl text-primario'/>,
        title: "Pagos seguros",
        description: "Contamos con un sistema de transacciones seguras",
    },
]

const Services = () => {
  return (
    <div>
        <div className="container my-14 md:my-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {
                    ServiceData.map((data) =>(
                        <div className='flex flex-col items-start sm:flex-row gap-4'>
                            {data.icon}
                            <div>
                                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                                <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                            </div>
                        </div>
                    ))
                }                
            </div>
        </div>
    </div>
  )
}

export default Services