import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Burguer from '../../../icons/menu.png';
import Inicio from '../../../icons/inicio.png';
import Peso from '../../../icons/peso.png';
import Grafica from '../../../icons/barra-grafica.png';
import Avitech from '../../../assets/logoAvitech.png';

const Sidebar = ({ show, handleAnimation }) => {
  const [optionSelected, setOptionSelected] = useState('inicio');

  useEffect(() => {
    const storedOption = localStorage.getItem('optionSelected');
    if (storedOption) {
      setOptionSelected(storedOption);
    }
  }, []);

  const handleSelected = (option) => {
    setOptionSelected(option);
    localStorage.setItem('optionSelected', option);
  };

  return (
    <div className="h-full flex items-center flex-col justify-around w-full relative shadowP rounded-xl">
      <img onClick={handleAnimation} className="h-5 absolute top-5 right-8 cursor-pointer" src={Burguer} alt="Menu" />

      <div className="h-3/4 w-full">
        <ul className="flex justify-start mt-20 items-center h-full w-full flex-col gap-5 px-5">
          <Link
            to="/dashboard"
            onClick={() => handleSelected('inicio')}
            className={`bg-neutral-200 cursor-pointer rounded-xl w-full p-2 font-semibold flex items-center ${optionSelected === 'inicio' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
          >
            <img className="h-5" src={Inicio} alt="Inicio" />
            <span className={`duration-200 overflow-hidden ${show ? 'w-0' : 'w-full ml-2'}`}>Inicio</span>
          </Link>
          <Link
            to="/pageGet"
            onClick={() => handleSelected('peso')}
            className={`bg-neutral-200 cursor-pointer rounded-xl w-full p-2 font-semibold flex items-center ${optionSelected === 'peso' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
          >
            <img className="h-5" src={Peso} alt="Peso" />
            <span className={`duration-200 cursor-pointer overflow-hidden ${show ? 'w-0' : 'w-full ml-2'}`}>Peso</span>
          </Link>
          <Link
            to="/grafica"
            onClick={() => handleSelected('grafica')}
            className={`bg-neutral-200 cursor-pointer rounded-xl w-full p-2 font-semibold flex items-center ${optionSelected === 'grafica' ? 'bg-yellow-400 scale-105 duration-200' : ''}`}
          >
            <img className="h-5" src={Grafica} alt="Grafica" />
            <span className={`duration-200 overflow-hidden ${show ? 'w-0' : 'w-full ml-2'}`}>Grafica</span>
          </Link>
        </ul>
      </div>
      <div className="w-full h-1/4 flex items-center justify-start px-5">
        <img src={Avitech} className="object-cover h-8" alt="" />
        <span className={`text-yellow-400 bungee duration-200 overflow-hidden ${show ? 'w-0' : 'w-full ml-2'}`}>Avitech</span>
      </div>
    </div>
  );
};

export default Sidebar;
