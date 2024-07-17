import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vacuna = () => {
 
  return (
    <div className='h-full p-2 w-full'>
      <h2 className='font-semibold'>Vacunas</h2>
      <div className='overflow-y-scroll h-5/6'>
        <table className='min-w-full bg-white'>
          <thead>
            <tr>
              <th className='py-2 px-4 bg-yellow-400 rounded-l-xl text-left'>Peso</th>
              <th className='py-2 px-4 bg-yellow-400 rounded-r-xl text-left'>Fecha</th>
            </tr>
          </thead>
          <tbody>
           
              <tr className='border-b'>
                <td className='py-2 px-4'> kg</td>
                <td className='py-2 px-4'></td>
              </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Vacuna;
