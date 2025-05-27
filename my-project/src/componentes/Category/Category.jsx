import React from 'react'
import Image1 from "../../assets/category/psp.png";
import Image2 from "../../assets/category/gameboy.png";
import Image3 from "../../assets/category/gamecube.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Primer columna */}
                <div className="py-10 pl-5 bg-gradient-to-br from-primario to-primario text-white rounded-3xl relative h-[320px] flex items-end">
                    <div className='flex flex-col justify-between h-full'>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Consolas</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Portátiles</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 dark:text-black dark:opacity-100 mb-2'>PSP</p>                            
                        </div>
                        <Button 
                            text="Explorar" 
                            bgColor={"bg-white"}
                            textColor={"text-primario"}/>
                    </div>
                    <img src={Image1} alt="" className='w-[320px] absolute bottom-0 right-0' />
                </div>
                {/* Segunda columna */}
                <div className="py-10 pl-5 bg-gradient-to-br from-[#ffce00] to-[#ffce00] text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Consolas</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Portátiles</p>
                            <p className='text-4xl xl:text-5xl font-bold dark:text-black opacity-60 dark:opacity-100 mb-2 z-60'>GBC</p>
                            <Button 
                            text="Explorar" 
                            bgColor={"bg-white"}
                            textColor={"text-amarillo"}/>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[200px] absolute top-1/2 -translate-y-1/2 right-0' />
                </div>
                {/* Tercera columna */}
                <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-morado to-morado/90 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Consolas</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Nintendo</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 dark:text-black dark:opacity-100 mb-2 uppercase'>Sobremesa</p>
                            <Button 
                            text="Explorar" 
                            bgColor={"bg-white"}
                            textColor={"text-morado"}/>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[350px] absolute top-1/2 -translate-y-1/2 right-8' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category