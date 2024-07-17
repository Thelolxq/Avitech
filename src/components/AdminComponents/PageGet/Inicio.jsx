import React from 'react'
import PesosPollos from './PesosPollos'
import Vacuna from './Vacuna'
import Alimento from './Alimento'

const Inicio = () => {
  return (
    <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='grafica1 shadowP h-full rounded-xl'>
          <PesosPollos />
        </div>
        <div className='grafica2 shadowP h-full rounded-xl'>
          <Vacuna />
        </div>
        <div className='grafica3 flex-col p-4 flex shadowP h-full rounded-xl'>
            <Alimento/>
        </div>
      </div>
  )
}

export default Inicio