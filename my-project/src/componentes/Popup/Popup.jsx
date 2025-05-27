import React from 'react'
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';

const Popup = ({orderPopup, handleOrderPopup}) => {
  return (
    <>
    {
        orderPopup && (
            <div>
                <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm'>
                    <div className='w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl'>
                        {/* Sección del header */}
                        <div className='flex items-center justify-between'>
                            <h1>Ordenar</h1>
                            <div>
                                <IoCloseOutline 
                                onClick={handleOrderPopup}
                                className='text-2xl cursor-pointer '/>
                            </div>
                        </div>
                        {/* Sección del formulario */}
                        <div className='mt-4'>
                            <input type="text" placeholder='Nombre' className='form-input'/>
                            <input type="text" placeholder='Correo electrónico' className='form-input'/>
                            <input type="text" placeholder='Domicilio' className='form-input'/>
                            <div className='flex justify-center'>
                                <Button text="Ordenar ahora" bgColor={"bg-primario"} textColor={"text-white"}/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
    </>
  )
}

export default Popup