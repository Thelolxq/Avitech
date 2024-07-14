import React, { useState } from 'react'
import Burguer from '../../../icons/menu.png'
import Inicio from '../../../icons/inicio.png'
import Peso from '../../../icons/peso.png'
import Grafica from '../../../icons/barra-grafica.png'
import GraficaFact from '../../../icons/barras-de-grafico.png'
const Dahsboard = () => {
    const [show, setShow] = useState(true)
    const [optionSelected, setOptionSelected] = useState('inicio')
   const handleAnimation = ()=>{
        setShow(!show)
    }
    const handleSelected = (option)=>{
        setOptionSelected(option)

    }

  return (
    <>
        <div className='h-screen w-full grid grid-cols-[2fr_9fr]'>
            <div className={`h-full py-2 pl-2 posicion w-full ${show ? 'sidebar': 'sidebar2'}`}>
                <div className=' h-full flex items-center justify-around w-full relative shadowP rounded-xl shadow-neutral-400 '>
                        <img onClick={handleAnimation} className='h-5 absolute right-5 cursor-pointer top-5' src={Burguer} alt="" />
                       
                        <div className='h-3/4 w-full '>
                            <ul className='flex h-full w-full flex-col gap-5 px-5'>
                                <li onClick={()=> handleSelected('inicio')} className={`bg-neutral-200 rounded-xl p-2 px-4 font-semibold flex items-end justify-between text-xs ${optionSelected === 'inicio' ? 'bg-yellow-400 scale-105 duration-75': ''}`}>Inicio <span><img className='h-5' src={Inicio} alt="" /></span></li>
                                <li onClick={()=> handleSelected('peso')} className={`bg-neutral-200 rounded-xl p-2 px-4 font-semibold flex items-end justify-between text-xs ${optionSelected === 'peso' ? 'bg-yellow-400 scale-105 duration-75': ''}`}>Peso <span><img className='h-5' src={Peso} alt="" /></span></li>
                                <li onClick={()=> handleSelected('grafica')} className={`bg-neutral-200 rounded-xl p-2 px-4 font-semibold flex items-end justify-between text-xs ${optionSelected === 'grafica' ? 'bg-yellow-400 scale-105 duration-75': ''}`}>Grafica <span><img className='h-5' src={Grafica} alt="" /></span></li>
                                <li onClick={()=> handleSelected('grafica factibilidad')} className={`bg-neutral-200 rounded-xl p-2 px-4 font-semibold flex items-end justify-between text-xs ${optionSelected === 'grafica factibilidad' ? 'bg-yellow-400 scale-105 duration-75': ''}`}>Grafica factibilidad <span><img className='h-5' src={GraficaFact} alt="" /></span></li>
                            </ul>
                        </div>
                </div>
            </div>
            <div className='h-full w-full posicion2'> 

            </div>
        </div>
    </>
  )
}

export default Dahsboard