import React, { useState } from 'react';
import Burguer from '../../../icons/menu.png';
import Inicio from '../../../icons/inicio.png';
import Peso from '../../../icons/peso.png';
import Grafica from '../../../icons/barra-grafica.png';


const Sidebar = ({show, handleAnimation}) => {
 
  const [optionSelected, setOptionSelected] = useState('inicio');

 
  const handleSelected = (option) => {
    setOptionSelected(option);
  };

  return (
   
      <div className="h-full flex items-center justify-around w-full relative shadowP rounded-xl">
        <img onClick={handleAnimation} className="h-5 absolute right-5 cursor-pointer top-5" src={Burguer} alt="Menu" />

        <div className="h-3/4 w-full">
          <ul className="flex h-full w-full flex-col gap-5 px-5">
            <li
              onClick={() => handleSelected('inicio')}
              className={`bg-neutral-200 rounded-xl p-2 font-semibold flex items-center ${optionSelected === 'inicio' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
            >
              <img className="h-5" src={Inicio} alt="Inicio" />
              <span className={`${show ? 'hidden' : 'inline-block ml-2'}`}>Inicio</span>
            </li>
            <li
              onClick={() => handleSelected('peso')}
              className={`bg-neutral-200 rounded-xl p-2 font-semibold flex items-center ${optionSelected === 'peso' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
            >
              <img className="h-5" src={Peso} alt="Peso" />
              <span className={`${show ? 'hidden' : 'inline-block ml-2'}`}>Peso</span>
            </li>
            <li
              onClick={() => handleSelected('grafica')}
              className={`bg-neutral-200 rounded-xl p-2 font-semibold flex items-center ${optionSelected === 'grafica' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
            >
              <img className="h-5" src={Grafica} alt="Grafica" />
              <span className={`${show ? 'hidden' : 'inline-block ml-2'}`}>Grafica</span>
            </li>
           
          </ul>
        </div>
      </div>
    
  );
};

export default Sidebar;
