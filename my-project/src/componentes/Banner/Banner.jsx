import React from 'react'
import hotsale from '../../assets/hero/hotsale.png';

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 '>
        <div className='container'>
            <div style={{ backgroundColor: data.bgColor}} className='relative h-[400px] grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
                {/* Imagen hotsale en la esquina superior izquierda */}
                <img 
                  src={hotsale} 
                  alt="hotsale" 
                  className="absolute -top-8 -right-36 w-24 sm:w-64 z-10 -translate-y-1/4 -translate-x-1/4"
                />
                {/* Primer columna */}
                <div className='p-6 sm:p-8 pr-8'>
                    <p data-aos="slide-right"
                    className='text-[30px]'>{data.discount}</p>
                    <h1 data-aos="zoom-out" className='uppercase text-4xl lg:text-7xl font-bold'>
                        {" "}
                        {data.title}</h1>          
                    <p data-aos="fade-up" className='text-lg'>{data.date}</p>
                </div>
                {/* Segunda columna */}
                <div data-aos="zoom-in" className='h-full flex items-center'>
                    <img src={data.image} alt="" className='scale-125 w-[500px] md:w-[700px] mx-auto drop-shadow-2xl object-cover'/>
                </div>
                {/* Tercer columna */}
                <div className='flex flex-col justify-center mx-8 gap-4 p-6 sm:p-8'>
                    <p data-aos="zoom-out" className='font-bold text-xl'>{data.title2}</p>
                    <p data-aos="fade-up" className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p data-aos="fade-up" className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div data-aos="fade-up" data-aos-offset="0">
                        <button style= {{color:data.bgColor}} className='bg-white py-2 px-4 rounded-full'>Comprar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner