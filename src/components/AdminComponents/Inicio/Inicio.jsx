import React from 'react';
import GraficaFood from './GraficaFood';
import GraficaWater from './GraficosWater';
import PredicHour from './PredicHour';
import GraficaAliDaily from './GraficaAliDaily'
import GraficaWatDaily from './GraficaWatDaily'

const Inicio = () => {
  return (
    <>
      <div className='h-full overflow-hidden bg-white grid gap-2 grid-rows-[1fr,1fr] grid-cols-[1fr,1fr] p-2'>
        <div className='grafica1 shadowP h-full rounded-xl'>
          <GraficaFood />
        </div>
        <div className='grafica2 shadowP h-full rounded-xl'>
          <GraficaWater />
        </div>
        <div className='grafica3 flex-col p-4 flex shadowP h-full rounded-xl'>
          <PredicHour />
          <div className='flex h-full items-center'>
              <GraficaAliDaily/>
              <GraficaWatDaily/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Inicio;
