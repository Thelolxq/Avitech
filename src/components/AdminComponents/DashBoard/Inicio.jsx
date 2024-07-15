import React from 'react';
import GraficaFood from './GraficaFood';
import GraficaWater from './GraficosWater';
import GraficaHour from './GraficaHour';

const Inicio = () => {
  return (
    <>
      <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='grafica1'>
          <GraficaFood />
        </div>
        <div className='grafica2'>
          <GraficaWater />
        </div>
        <div className='grafica3'>
          <GraficaHour />
        </div>
      </div>
    </>
  );
}

export default Inicio;
