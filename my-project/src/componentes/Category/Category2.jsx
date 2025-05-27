import React from 'react'
import Image1 from "../../assets/category/ps1.png";
import Image2 from "../../assets/category/dsi.png";
import Image3 from "../../assets/category/god-of-war-2.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className="py-8">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Primer columna */}
                <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-500/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
                    <div>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Consolas</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Sony</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 dark:text-black dark:opacity-100 mb-2'>SOBREMESA</p>
                            <Button 
                            text="Explorar" 
                            bgColor={"bg-primario"}
                            textColor={"text-white"}/>
                        </div>
                    </div>
                    <img src={Image1} alt="" className='w-[350px] absolute top-1/2 -translate-y-1/2 -right-0' />
                </div>
                {/* Segunda columna */}
                <div className="py-10 pl-5 bg-gradient-to-br from-[#F955A0] to-[#F955A0] text-white rounded-3xl relative h-[320px] flex items-start">
                    <div>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Consolas</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Portátiles</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 dark:text-black dark:opacity-100 mb-2'>NDSi</p>
                            <Button 
                            text="Explorar" 
                            bgColor={"bg-white"}
                            textColor={"text-[#d4377a]"}/>
                        </div>
                    </div>
                    <img src={Image2} alt="" className='w-[180px] absolute bottom-0 right-0' />
                </div>
                {/* Tercera columna */}
                <div className="py-10 pl-5 pr-4 bg-gradient-to-br from-[#00439C] to-[#00439C]/80 text-white rounded-3xl relative h-[320px] flex items-center overflow-hidden">
                    <div>
                        <div className="mb-4">
                            <p className='mb-[2px] text-white'>Juegos</p>
                            <p className='text-2xl font-semibold mb-[2px]'>Sony</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-60 dark:text-black dark:opacity-100 mb-2'>PS2</p>
                            <Button 
                            text="Explorar" 
                            bgColor={"bg-white"}
                            textColor={"text-azul"}/>
                        </div>
                    </div>
                    <img src={Image3} alt="" className='w-[300px] absolute top-1/2 -translate-y-1/2 -right-8' />
                </div>                              
            </div>
        </div>
    </div>
  )
}

export default Category